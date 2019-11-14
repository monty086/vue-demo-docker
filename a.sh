#!/bin/bash
docker image build -t vue-docker-demo:beta -f Dockerfile_beta .
docker rm $(docker ps -a -q)
docker container run -p 80:80 --rm --name docker-container -d vue-docker-demo:beta



docker image build -t node_nginx_chromium -f Dockerfile-node-nginx .

puppeteer_skip_chromium_download=true

docker image build -t vue-docker-demo:beta -f Dockerfile_beta .