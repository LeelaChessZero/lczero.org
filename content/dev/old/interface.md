---
title: C++ interface
weight: 200
---

Implement your own Lc0 backend in four simple steps:

1. Implement `Network` and `NetworkComputation` [interface](https://github.com/LeelaChessZero/lc0/blob/master/src/neural/network.h#L56).
2. Write a factory function to create your backend.
3. Register your factory function using [`REGISTER_NETWORK`](https://github.com/LeelaChessZero/lc0/blob/master/src/neural/factory.h#L132) macro.
4. Link your implementation with Lc0.

Some details:

### Factory function

The factory function has the following signature:

```cpp
std::unique_ptr<Network> (const std::optional<WeightsFile>& w,
                          const OptionsDict& options);
```

In the case of error the factory function (or any of the backend function actually) my throw an [`Exception` from utils/exception.h](https://github.com/LeelaChessZero/lc0/blob/master/src/utils/exception.h).

The **WeightsFile** is a Protocol Buffer containing [the NN weights]({{< ref "weights" >}}).

The **OptionsDict** contains options passed to the backend through the `--backend-opts` command line flag.


### Network interface

```cpp
class Network {
 public:
  virtual const NetworkCapabilities& GetCapabilities() const = 0;
  virtual std::unique_ptr<NetworkComputation> NewComputation() = 0;
};
```

This interface is typically created only once per session. However the network must not use any global variables or be a singleton because there are exceptions:

* It's possible for search to use several backends simultaneously. It typically happens when a user has multiple GPUs. In this case one backend per GPU is created.

* During the training data generation, it's possible e.g. to use one backend/weights file for white and another backend for black.

`GetCapabilities()` returns a [backend capabilities struct](https://github.com/LeelaChessZero/lc0/blob/master/src/neural/network.h#L85):

```cpp
struct NetworkCapabilities {
  InputFormat input_format;
  MovesLeftFormat moves_left;
};
```

`InputFormat` should be copied from the `WeightsFile` (it defines what data should 112 input planes contain).

`MovesLeftFormat` should either be copied from the `WeightsFile` if the backend supports that format, or set to `MOVES_LEFT_NONE` otherwise.

`NewComputation()` function should return a `NetworkComputation` object which will evaluate a NN batch. The function must be thread safe. Expect to have at most one instance of `NetworkComputation` alive **per thread** at a given time. Most of libraries don't simultaneous eval from multiple threads, in this case it makes sense to have a mutex in your `Network` class.

### NetworkComputation interface

```cpp
class NetworkComputation {
 public:
  // Adds a sample to the batch.
  virtual void AddInput(InputPlanes&& input) = 0;
  // Do the computation.
  virtual void ComputeBlocking() = 0;
  // Returns how many times AddInput() was called.
  virtual int GetBatchSize() const = 0;
  // Returns Q value of @sample.
  virtual float GetQVal(int sample) const = 0;
  virtual float GetDVal(int sample) const = 0;
  // Returns P value @move_id of @sample.
  virtual float GetPVal(int sample, int move_id) const = 0;
  virtual float GetMVal(int sample) const = 0;
  virtual ~NetworkComputation() {}
};
```

The NN eval workflow happens in the following way:

1. `NetworkComputation` (using `YourBackendNetwork::NewComputation()` function)
2. Encoded chess positions are added into the batch using `AddInput()` function.  
   Typically batches contain up to 512 entries, but this is configurable.
3. Batch is evaluated by calling `ComputeBlocking()` function (as the name suggests, this function should block until the eval is completed).
4. NN output is accessed using `Get*()` functions.

#### Input encoding

112 input planes are passed in an `InputPlanes` type, which is defined [as following](https://github.com/LeelaChessZero/lc0/blob/master/src/neural/network.h#L53):

```cpp
// All input planes are 64 value vectors, every element of which is either
// 0 or some value, unique for the plane. Therefore, input is defined as
// a bitmask showing where to set the value, and the value itself.
struct InputPlane {
  InputPlane() = default;
  void SetAll() { mask = ~0ull; }
  void Fill(float val) {
    SetAll();
    value = val;
  }
  std::uint64_t mask = 0ull;
  float value = 1.0f;
};
using InputPlanes = std::vector<InputPlane>;
```

So, it's a vector of 112 elements. Every element encodes 8×8 plane using `InputPlane` struct.

`InputPlane` contains 64 bit field `mask` which contains the mask of the non-zero elements of 8×8 input matrix, and a float field `value` which contains value of those non-zero elements.

#### Returning output

The `Get*()` function all have `int sample` as the first parameter, denoting which output of which sample of the batch is requested (zero-based, obviously).

#### Policy head

Policy head is accessed using `GetP(int sample, int move_id)` function. `move_id` is an index in the move vector, between 0 and 1857.

#### Value head

* For **VALUE_CLASSICAL**:
    * `GetQ()` should return the value of the value head.
    * `GetD()` should return 0.0.
* For **VALUE_WDL**:
    * The values of the vector returned from the value head are called **W**, **D** and **L**.
    * `GetQ()` should return **W-L**.
    * `GetD()` should return **D**.

#### Moves left head

The output of that head is accessed using `GetM()` function.

## Example backend implementations

"Real" backends:

* [CUDA backend](https://github.com/LeelaChessZero/lc0/blob/master/src/neural/cuda/network_cudnn.cc)
* [DirectX 12 backend](https://github.com/LeelaChessZero/lc0/blob/master/src/neural/dx/network_dx.cc)
* [OpenCL backend](https://github.com/LeelaChessZero/lc0/blob/master/src/neural/opencl/network_opencl.cc)
* [BLAS backend](https://github.com/LeelaChessZero/lc0/blob/master/src/neural/blas/network_blas.cc)
* [Tensorflow C++ backend](https://github.com/LeelaChessZero/lc0/blob/master/src/neural/network_tf_cc.cc)


Backend adapters to combine other backends (e.g. in the case of multiple GPUs):

* [Multiplexing backend](https://github.com/LeelaChessZero/lc0/blob/master/src/neural/network_mux.cc)
* [Round robin backend](https://github.com/LeelaChessZero/lc0/blob/master/src/neural/network_rr.cc)
* [Demux backend](https://github.com/LeelaChessZero/lc0/blob/master/src/neural/network_demux.cc)

Other backends:

* ["Check" backend](https://github.com/LeelaChessZero/lc0/blob/master/src/neural/network_random.cc)
* [Random backend](https://github.com/LeelaChessZero/lc0/blob/master/src/neural/network_check.cc) -- checks whether two backends return the same result.