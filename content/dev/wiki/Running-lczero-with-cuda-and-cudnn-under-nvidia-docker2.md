---
title: "Running lczero with cuda and cudnn under nvidia docker2"
weight: 500
wikiname: "Running-lczero-with-cuda-and-cudnn-under-nvidia-docker2"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
If you have nvidia-docker2 installed, it's possible to run lczero under a docker container while still leveraging all the speed advantages of CUDA and cuDNN.  See https://github.com/NVIDIA/nvidia-docker for instructions on setting up nvidia-docker2

## tl;dr

    docker run --runtime nvidia --rm -it vochicong/lc0-docker:gpu

will run the latest release version of lc0 and the client in the pre-built Docker image ([Dockerfile](https://github.com/vochicong/lc0-docker)).

## A manual way

You'll need a few things:

Dockerfile:
```
FROM nvidia/cuda:10.0-cudnn7-devel

RUN apt-get update && apt-get dist-upgrade -y && apt clean all
RUN apt-get update && apt-get install -y curl wget supervisor git clang-6.0 ninja-build protobuf-compiler libprotobuf-dev python3-pip && apt-get clean all
RUN pip3 install meson

RUN     mkdir /lczero && \
        cd ~ && \
        git clone -b release/0.18 --recurse-submodules https://github.com/LeelaChessZero/lc0.git && \
        cd lc0 &&\
        ./build.sh

RUN     cp /root/lc0/build/release/lc0 /lczero && \
        file /lczero/lc0 && \
        chmod +x /lczero/lc0

RUN cd /lczero && \
    curl -s -L https://github.com/LeelaChessZero/lczero-client/releases/latest | egrep -o '/LeelaChessZero/lczero-client/releases/download/v.*/client_linux' | head -n 1 | wget --base=https://github.com/ -i - && \
    chmod +x client_linux


COPY supervisord.conf /etc/supervisor/conf.d/
COPY settings.json /lczero/settings.json
RUN service supervisor start
```

If you have multiple GPUs, then this will be useful: createSuper.py:
```
#!/usr/bin/env python3

import sys
from subprocess import Popen, PIPE

process = Popen(["/usr/bin/nvidia-smi", "--list-gpus"], stdout=PIPE)
(output, err) = process.communicate()
exit_code = process.wait()

number_gpus = len(output.split(b"\n")) -1

for gpu in range(0, number_gpus):
    print("""[program:lczero{gpu}]
process_name=%(program_name)s_%(process_num)02d
directory=/lczero
command=/usr/bin/nice /lczero/client_linux --backend-opts="cudnn(gpu={gpu})"
user=root
redirect_stderr=true
stdout_logfile=/lczero/log.log
stdout_logfile_maxbytes=100MB
numprocs=1
autostart=true
autorestart=true""".format(gpu=gpu))
```
which you can run:
```
python3 createSuper.py > supervisord.conf
```

If you have just one GPU, this will suffice:
supervisord.conf:
```
[program:lczero]
process_name=%(program_name)s_%(process_num)02d
directory=/lczero
command=/usr/bin/nice /lczero/client_linux
user=root
redirect_stderr=true
stdout_logfile=/lczero/log.log
stdout_logfile_maxbytes=100MB
numprocs=1
autostart=true
autorestart=true
```

Then settings.json, replacing username and password as appropriate:
```
{"User":"username","Pass":"password"}
```

Build the container:
`sudo docker build . -t leela`

Then start it up:
`sudo docker exec -it $(sudo docker run --runtime=nvidia --name leela -it -d leela:latest ) service supervisor start`