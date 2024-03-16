---
title: "XLA backend"
weight: 500
wikiname: "XLA-backend"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
Lc0 XLA backend uses [OpenXLA](https://github.com/openxla/xla) compiler to produce code that executes a neural network. The backend takes ONNX as an input, and converts it to the HLO format that XLA understands.

The C API that OpenXLA implements is called PjRT, and the Lc0 XLA backend runs NN through it.
#### Pros
* On NVidia devices, it runs NN at speeds comparable to the handwritten cuda/cudnn backend (and sometimes faster).
* Only requires ONNX as input (either external, or converted by the Lc0 ONNX converter), meaning it can run NNs for which other backends are no written yet.
* Optimizes for particular GPU (will produce different code for A100 vs H100, and for different memory sizes)
* Supports running on TPUs*
* Supports multiGPU / multihost setups for huge nets (not sure if we ever need it)
#### Cons
* Painful to build
* Linux only (in theory runs in windows through WSL)
* Slow backend startup. It compiles networks when it load them, which may take a few minutes.
## Building XLA Lc0 backend
To build it, just add `-Dxla` parameter to `./build.sh`. There's no dependencies, but it needs `pjrt` plugin (a `.so` file) at the runtime.
## Obtaining XLA PjRT plugin (a `.so` file)

### Using prebuilt one
Most likely, you'll have to build it yourself, but you may try prebuilt XLA library in the [elixir-nx](https://github.com/elixir-nx/xla/releases) repository. They build entire XLA repository though, so the resulting `.so` file is ≈20% larger, and noone tested yet whether the function `GetPjrtApi()` is actually exported.
### Building it yourself
1. Clone the openxla/xla repo:
```sh
git clone https://github.com/openxla/xla.git
```
2. Install either Bazel **6.5.0**, or (better) Bazelisk, which would install correct version of Bazel automatically.

3. Inside the repo, run `./configure` with desired parameters (see `./configure --help`), for example:
```
TF_CUDA_PATHS=/opt/cuda,/usr ./configure.py --backend CUDA  --cudnn_version=8 --cuda_compute_capabilities=5.2
```
4. Build the plugin (takes some hours):
```sh
bazel build -c opt //xla/pjrt/c:pjrt_c_api_gpu_plugin.so
```
5. After that, the resulting plugin will be locates at `<xla-repo>/bazel-bin/xla/pjrt/c/pjrt_c_api_gpu_plugin.so`. You'll either have to put it into the same directory as your `./lc0`, or will have to specify path to it in the Lc0 backend opts.
### Obtaining PjRT plugin to run on Google TPU
The PjRT XLA plugin to run on Google TPU is called `libtpu.so`. Noone tried it though.
It's available at https://storage.googleapis.com/cloud-tpu-tpuvm-artifacts/libtpu/2023-09-12/libtpu.so (or check for newer versions [here](https://storage.googleapis.com/cloud-tpu-tpuvm-artifacts))
## Running XLA backend
Specify `--backend=xla` as usual. Supported options (through `--backend-opts`):
* `device=0` -- use GPU number 0 (it's `device` rather than `gpu` because it's not necessary a GPU but rather e.g. TPU)
* `plugin_path=./pjrt_c_api_gpu_plugin.so` path to the PjRT plugin. Note that the filename uses `dlopen()` convention: if it contains slash (e.g. starts with `./`, it's a relative or absolute path to a file); if it doesn't contain a slash, the only a few system defined locations (e.g. LD_LIBRARY_PATH dir) are checked.
* `data_type=f32` the data type to use inside the NN (currently supported are `f32`, `f16`, `bf16`). (currently, in all cases the backend communicates with the GPU using `f32` though)
* `max_batch=512` and `steps=16` define for which batch sizes to compile the code. Currently XLA backend only supports static batch sizes, and chooses smallest suitable batch size for evaluation. E.g. if `max_batch=9` and `steps=3`, kernels for batch sizes 3, 6 and 9 will be generated.
## Updating/Debugging the XLA backend
To inspect the generated HLO, a bunch of options are added to the `leela2onnx` command, for example:
* `--hlo-text-output=filename.txt` -- text dump of HLO
* `--hlo-proto-output=filename.pb` -- dump of HLO as proto. This can be fed to all the XLA tools (e.g. `hlo-opt` to see the kernels it generates)

If you need to add a convertor for an ONNX op not currently supported, (or not fully supported), here is how it can be done:
1. Convert your net to ONNX, e.g.
```
./lc0 leela2onnx --input=t79.pb.gz --output=t79.onnx
```
2. Convert your ONNX net to HLO (in `text` and `proto` form) using the `jaxonnxruntime`.
You'll need `.hlo` file to see how it's implemented in HLO form (for the `onnx2hlo.cc` code), and `.hlo.proto` to find out how new HLO opcodes (if any) are encoded in proto (for the `hlo_builder.cc` code):
```python
import onnx
from jaxonnxruntime.call_onnx import call_onnx_model
from jaxonnxruntime import config
import numpy as np
import jax

config.update('jaxort_only_allow_initializers_as_static_args', False)

MODEL_FILE = 't79.onnx'
BATCH_SIZE = 14
INPUTS = [np.zeros((BATCH_SIZE, 112, 8, 8))]

onnx_model = onnx.load(MODEL_FILE)
m = call_onnx_model(onnx_model, INPUTS)
lowered = jax.jit(m[0]).lower(m[1], INPUTS)
with open(MODEL_FILE + ".hlo", "w") as f:
  f.write(lowered.compiler_ir('hlo').as_hlo_text())
with open(MODEL_FILE + ".hlo.proto", "wb") as f:
  f.write(lowered.compiler_ir('hlo').as_serialized_hlo_module_proto())
```
3. Convert ONNX and HLO proto to text format:
ONNX:
```
cat t75.onnx | protoc -I ~/path/to/lc0/src/neural/onnx/ ~/path/to/lc0/src/neural/onnx/onnx.proto --decode=pblczero.ModelProto > t75.onnx.asciiproto
```
HLO:
```
cat t75.hlo.proto | protoc -I ~/path/to/xla/ ~/path/to/xla/xla/service/hlo.proto --decode=xla.HloModuleProto > t75.hlo.asciiproto
```
4. Add missing HLO opcodes to `hlo_builder.cc` and ONNX operands to `onnx2hlo.cc`. 
When adding new HLO opcodes, it's often needed to add more fields into `hlo.proto`. When that happens, also update `print_hlo.cc` to show them.

Also see the description of the [initial PR](https://github.com/LeelaChessZero/lc0/pull/1949) for more details.

5. To iterate on changes, it's useful to use (hidden) `--hlo-allow-partial-result` flag of `leela2onnx`, to see the partial output of the HLO conversion even if there is an error, for example:
```
./lc0 leela2onnx --input=BT3-768x15x24h-swa-2790000.pb.gz --hlo-text-output=- --hlo-allow-partial-result --hlo-batch-size=333 --onnx-data-type=bf16
```

