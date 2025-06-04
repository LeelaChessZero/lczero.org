---
title: "Weights file format"
weight: 300
---

The NN weights file is in Google Protocol Buffers[^1] format.

The schema definition is located in the [lczero-common](https://github.com/LeelaChessZero/lczero-common/blob/master/proto/net.proto) repository.

### NN format description

The network format description is contained in `weights.format().network_format()` submessage.

* It's safe to assume that `NetworkStructure` 0, 1 or 2 will never be passed to the backend. I.e.
    * if `weights.format().network_format().network() == NETWORK_CLASSICAL_WITH_HEADFORMAT` (3), residual blocks don't have SE layers.
    * if `weights.format().network_format().network() == NETWORK_SE_WITH_HEADFORMAT` (4), residual blocks has SE layers.
    * Otherwise the backend should throw an exception.

`weights.format().network_format().policy()`, `weights.format().network_format().value()` and `weights.format().network_format().moves_left()` must be checked,
and in the case of the unsupported value, throw an exception.

`weights.format().input()` should be copied to backend's `NetworkCapabilities`.


### Weights encoding

Number of `FILTERS` is `LayerAdapter(weights.weights().input().biases()).size() / 112`.
Number of `BLOCKS` is `weights.weights().residual_size()`.


#### NN parameters encoding

Internally, the parameters are encoded as 16-bit quantized floating point numbers, in `Weights::Layer` protobuf submessage.

To use them as an array of floats, use `LayerAdapter` class from [utils/weights_adapter.h](https://github.com/LeelaChessZero/lc0/blob/393839775722fd89322179aa54b18f30a86df732/src/utils/weights_adapter.h#L35).

For example here is how to access biases of the input convlayer:
```cpp
const auto& input = weights.weights().input();
LayerAdapter biases(input.biases());
// Now use biases as if it was a vector<float>, e.g.
std::cout << biases.size();
for (auto x: biases) { /* do something */ }
```

Tensors are stored linearized to a vector. Noone remembers anymore which transposition is used for it, but most likely it's `HWC` (e.g. the conv kernel is 3×3×`FILTERS`).
When you figure that out, feel free to update this document.

#### Convolution layers

Convolution layers are encoded in `Weights::ConvBlock` for example, input convolution is `weights.weights().input()` of this type:

```protobuf
  message ConvBlock {
    optional Layer weights = 1;
    optional Layer biases = 2;
    optional Layer bn_means = 3;
    optional Layer bn_stddivs = 4;
    optional Layer bn_gammas = 5;
    optional Layer bn_betas = 6;
  }
```

`weights` contains weights, and `biases` contains biases. All `bn_` are not used anymore, always zero (they were used for batch normalization but now it's fused).


#### Residual blocks

In `weights.weights().residual()` repeated submessage field, this is pretty self-describing.

```protobuf
  message Residual {
    optional ConvBlock conv1 = 1;
    optional ConvBlock conv2 = 2;
    optional SEunit se = 3;
  }
```

`SEunit` is also quite clear:

```protobuf
  message SEunit {
    optional Layer w1 = 1;
    optional Layer b1 = 2;
    optional Layer w2 = 3;
    optional Layer b2 = 4;
  }
```

`SE_CHANNELS` can be compute as `LayerAdapter(se_unit.b1()).size()`;


#### Policy head

For `POLICY_CLASSICAL`, `POLICY_CONV_SIZE` is computed as `LayerAdapter(weights.policy().biases()).size()`.
Also for `POLICY_CLASSICAL`, the `policy1` field is unused.

```protobuf
  // Policy head
  // Extra convolution for AZ-style policy head
  optional ConvBlock policy1 = 11;
  optional ConvBlock policy = 3;
  optional Layer ip_pol_w = 4;
  optional Layer ip_pol_b = 5;
```

#### Value head

Probably clear..

#### Moves left head

```protobuf
  // Moves left head
  optional ConvBlock moves_left = 12;
  optional Layer ip1_mov_w = 13;
  optional Layer ip1_mov_b = 14;
  optional Layer ip2_mov_w = 15;
  optional Layer ip2_mov_b = 16;
```
`MLH_CHANNELS` = `LayerAdapter(weights.moves_left().biases()).size()`

`FC_SIZE` = `LayerAdapter(weights.ip1_mov_b()).size()`


## LegacyWeights wrapper

There is a [`LegacyWeights`](https://github.com/LeelaChessZero/lc0/blob/master/src/neural/network_legacy.h#L31) struct which was used to contain weights
before Protocol Buffer weights format was introduced. This struct was planned to be deprecated and later removed.

However, it seems that it adds considerable amount of convenience (as working with `std::vector<float>` is more familiar) so it's probably here to say.

[^1]: https://developers.google.com/protocol-buffers