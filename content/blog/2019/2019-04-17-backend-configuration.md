+++
title = "Backend configuration"
slug = "backend-configuration"
published = 2019-04-17T11:55:00+02:00
author = "crem"
tags = []
draft = false
+++

To break the silence of lack of posts in this blog, let me write about Lc0
backends configuration, as it has been totally undocumented so far.  
(For other options it's possible to get rough idea of their meaning by running
lc0 --help).

<!--more-->

So, there are two command line parameters and corresponding UCI options:

  * `--backend` (UCI option: Backend) -- name of the backend,
  * `--backend-opts` (UCI option: BackendOptions) -- backend options.

While it's relatively clear what different backends do (but I list them all
below with possible options), syntax backend options has always been a
mystery.

So, let's talk about options syntax first:

## Options syntax

Note that options syntax has some useless features and missing some useful
features, so it may happen that it will change in future.  
Also there are plans to have better detection of incorrect use of the options,
and display useful message in that case.

So, options is a comma-separated list of:  
* Boolean `key=value` parameter, e.g. `cow=true`, `duck=false`.
* Integer `key=value` parameters, e.g. `cow=4`,
* Float `key=value` parameters, e.g. `cow=4.0`,
* String `key=value` parameters, e.g. `cow="Ducks are the best!"`.
* Subdictionary or options with name and list of sub-options, e.g. `cow(moo=4, 
cow=7.0)`

Notes:

  1. Keys should start from a letter, but may contain symbols `_-./` inside.
  2. Integer and Float are not interchangeable. If backend expects float 
parameter "max-temperature", it's not possible to write `max-temperature=74`, 
only `max-temperature=74.0`.
  3. Strings can be quoted either with `"` or `'` marks.
  4. If string doesn't have special characters, quotation marks can be omitted, 
e.g. `backend=cudnn-fp16` is possible instead of `backend="cudnn-fp16"`.
  5. Keys (or subdictionary names) can not repeat, e.g. this is forbidden: 
`backend(gpu=0),backend(gpu=1)`.  
 _(subnote: keys of different types are allowed `[cow=4,cow=4.0,cow(),cow=moo]`,
 but it's better not to know about that)._

  6. If subdictionary has empty list of options, parenthesis can be removed, 
e.g. `a=5,b,c=7` instead of `a=5,b(),c=7`.
  7. Alternatively, if a name of a subdictionary is not needed, it can be 
omitted, e.g. `(gpu=0),(gpu=1)` instead of `a(gpu=0),b(gpu=1)`.
_(Internally, names [0], [1], etc. are created for them)._
  8. If a parameter is missing in subdictionary, it's also looked up in parent 
dictionary. E.g. `backend=cudnn,(gpu=0),(gpu=1)` is the same as 
`(gpu=0,backend=cudnn),(gpu=1,backend=cudnn)`.

## Backends

And how a brief tour to the backends that we have.

### tensorflow

This backend was historically the first (briefly) that Lc0 supported. It's not
included in pre-built binaries as it's pretty complicated to get it built and
run.  
Also it didn't have any updates since August, so test10 is the latest network
run it supports.  
But if we'll ever want to use Google TPUs, this backend has to be revived.

### tensorflow-cpu

Version of tensorflow backend that runs on CPU. Was useful before we had blas
backend.

### cudnn

Backend for CUDA-compatible devices (NVidia GPUs).  
Options:

  *  **gpu=\<int>** (default: 0) Which GPU device to use (0-based: 0 for the 
first GPU device, 1 for the second, etc).
  *  **max_batch=\<int>** (default: 1024) Maximum size of minibatch that 
backends allocates memory for. This is different from search parameter 
`--minibatch-size` (but should be at least same size), it doesn't affect search 
speed or performance. If it's too large, engine may refuse to start because it 
won't be able to allocate needed VRAM. If it's too small, engine will crash 
when batch coming from search algorithm will turn out to be too large.

### cudnn-fp16

Version of cudnn backend which makes use of tensor cores, found in newer
NVidia GPUs (RTX 20xx series is the most popular). That improves performance
by a lot.  
Options:  
same as in cudnn.

### opencl

OpenCL backend is for GPUs which are not CUDA-compatible. It's slower than
CUDA but faster than using CPU.  
Options:

  *  **gpu=\<int>** (default: 0) Which GPU device to use (0-based: 0 for the 
first GPU device, 1 for the second, etc).
  *  **force_tune=true** Triggers search for the best configuration for GPU.
  *  **tune_only=true** Force exits the engine as soon as GPU tuning is 
complete.
  *  **tune_exhaustive=true** Tries more configurations during tuning. May take 
some time, but as a result performance may be slightly better.

### blas

Runs NN evaluation on CPU.  
Options:

  *  **blas_cores=\<int>** (default: 1) Number of cores to use (probably?..)
  *  **batch_size=\<int>** (default: 256) Maximum size of minibatch that 
backend can handle. Similar to cudnn's parameter: doesn't change anything by 
itself. Too large eats up memory, too low crashes. Should probably be renamed 
to max_batch for consistency.

### multiplexing

This backend originally was intended to use during selfplay generation. It
combines NN eval requests from several threads (in selfplay case, those
threads come from different games), and sends them further to child backend as
a single batch.  
Also it supports several child backends and sends a batch to whichever backend
is free. Because of this it's also used outside of selfplay, in multi-GPU
configurations (although now there are better backends for that).

Options:  
Multiplexing takes list of subdictionaries as options, and creates one child
backend per dictionary. All subdictionary parameters are passed to those
backends, but there are also additional params:

  *  **threads=\<int>** (default: 1) Number of eval threads allocated for this 
backend.
  *  **max_batch=\<int>** (default: 256) Maximum size of batch to send to this 
backend.
  *  **backend=\<string>** (default: name of the subdictionary) Name of child 
backend to use.

Examples:

  * `backend=cudnn,(gpu=0),(gpu=1)` -- Two child backends, backend name is 
inherited from parent dictionary.
  * `blas,cudnn` -- Two child backends, blas and cudnn (() are omitted for 
subdictionary, and name of subdictionary is used as backend= option is not 
specified).
  * Not allowed!: `cudnn,cudnn` (two keys with the same name)
  * `threads=2,cudnn(gpu=0),cudnn-fp16(gpu=1)` -- cudnn backend for GPU 0, 
cudnn-fp16 for GPU 1, two threads are used for each.

### roundrobin

Can have multiple child backends. Alternates to which backend the request is
sent. E.g. if there are 3 children, 1st request goes to 1st backend, 2nd -- to
2nd, then 3rd, then 1st, 2nd, 3rd, 1st, ... and so on.  
Somewhat similar to multiplexing backend, but doesn't combine/accumulate
requests from different threads, but rather sends them verbatim immediately.
It also doesn't need to use any locks which makes it a bit faster.

It's important for this backend that all child backends have the same speed
(e.g. same GPU model, and none of them is throttled/overheated). Otherwise all
backends will be slowed down to the slowest one. If you use non-uniform child
backends, it's better to use multiplexing backend.

Options:  
Takes list of subdictionaries as options, and creates one child backend per
dictionary. All subdictionary parameters are passed to those backends, but
there are also one additional param:

  *  **backend=\<string>** (default: name of the subdictionary) Name of child 
backend to use.

### demux

Does the opposite from what multiplexing does: takes large batch which comes
from search, splits into smaller batches and sends them to children backends
to compute in parallel.  
May be useful for multi-GPU configurations, or multicore CPU configurations
too.

As with roundrobin backend, it's important that all child backends have the
same performance, otherwise everyone will wait for the slowest one.

Options:

  *  **minimum-split-size=\<int>** (default: 0) Do not split batch to 
subbatches smaller than that.
  * Also takes list of subdictionaries as options, and creates one child 
backend per dictionary. All subdictionary parameters are passed to those 
backends, but there are also additional params:
    *  **threads=\<int>** (default: 1) Number of eval threads allocated for 
this backend.
    *  **backend=\<string>** (default: name of the subdictionary) Name of child 
backend to use.

### random

A testing backend which returns random number as NN eval. Initially was
intended for performance testing of search algorithm, but turned out also to
be useful to generate seed games when we start new run.

Options:

  *  **delay=\<int>** (default: 0) Do a delay during every NN eval, in 
milliseconds, to simulate slower backend.
  *  **seed=\<int>** (default: 0) Seed to initialize random number generator to 
get repeatable results.
  *  **uniform=true** Enables "uniform mode". Instead of returning random 
numbers, always returns 0.0 as position eval and equal probability for all 
possible moves. Turned out that's how DeepMind generated their seed games, and 
that's what we do now too.

### check

Sends the same data to two backends and compares the result. Used to
detect/debug mismatches between backends.

Options:

  *  **mode=check|display|histo** (default: check) What to do with the results: 
only check (and report mismatches), display short stats, display histogram.
  *  **atol=\<float>** (default: 0.00001) Maximum absolute value difference 
between backends, still considered normal (not mismatching).
  *  **rtol=\<float>** (default: 0.0001) Maximum relative value difference 
between backends, still considered normal (not mismatching).
  *  **freq=\<float>** (default: 0.2) How often to check for mismatches 
(0=never, 1=always, 0.2=for every fifth request)
  * Two backends to compare are passed as subdictionaries. All params are 
passed to those backeds, as usual, and as usual there's one additional param:
    *  **backend=\<string>** (default: name of the subdictionary) Name of child 
backend to use.

## Backend configuration at competitions

Here is what we use in competitions (as far as I could find):

### CCCC:

  *  **backend:** demux
  *  **backend-opts:** backend=cudnn-fp16,(gpu=0),(gpu=1),(gpu=2),(gpu=3)

### TCEC:

  *  **backend:** roundrobin (starting from current DivP; before it was 
multiplexing)
  *  **backend-opts:** backend=cudnn-fp16,(gpu=0),(gpu=1)

Happy configuring!
