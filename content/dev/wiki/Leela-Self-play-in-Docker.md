---
title: "Leela Self play in Docker"
weight: 500
wikiname: "Leela-Self-play-in-Docker"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
# Docker 

1. Install docker for your box
2. Create temporary folder 

	```mkdir ~/temp && cd ~/temp```
3. Create a file named `Dockerfile` and paste the following

```
From ubuntu:latest

RUN apt-get update
RUN apt install g++ git libboost-all-dev libopenblas-dev opencl-headers ocl-icd-libopencl1 ocl-icd-opencl-dev zlib1g-dev cmake wget supervisor curl -y
RUN apt install clinfo && clinfo
RUN     mkdir /lczero && \
        cd ~ && \
        git clone https://github.com/glinscott/leela-chess.git &&\
        cd leela-chess &&\
        git submodule update --init --recursive &&\
        mkdir build && cd build &&\
        #for gpu build
        #cmake .. && \
        #for cpu build
        cmake -DFEATURE_USE_CPU_ONLY=1 .. &&\
        make -j$(nproc) && \
        cp lczero /lczero && \
        cd /lczero && \
        curl -s -L https://github.com/glinscott/leela-chess/releases/latest | egrep -o '/glinscott/leela-chess/releases/download/v.*/client_linux' | head -n 1 | wget --base=http://github.com/ -i - && \
        chmod +x client_linux
COPY supervisord.conf /etc/supervisor/conf.d/
RUN service supervisor start
```

if you want to build for GPU comment out `cmake -DFEATURE_....` and uncomment `cmake ..`

4. Create a file named `supervisord.conf` and paste the following
```
[program:lczero]
process_name=%(program_name)s_%(process_num)02d
directory=/lczero
command=/lczero/client_linux -user={your user name} -password={{your password}} -gpu=-1 (remove this if building for gpu)
user=root
redirect_stderr=true
stdout_logfile=/lczero/log.log
stdout_logfile_maxbytes=100MB
numprocs={{number of clients to run}}
autostart=true
autorestart=true

```

5. run `docker build -t leela .` and wait for it to finish
6. once it is finished run `docker exec -it $(docker run -it -d -p 52022:22 leela:latest) service supervisor start` 

this will run the docker container in detached mode and start supervisor.




# Useful Docker Commands
* `docker ps` - list running containers
* `docker stop container_id` - stop a running container
* `docker exec -it container_id /bin/bash` - get into a running container
