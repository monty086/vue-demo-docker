#!/bin/bash
docker build -t docker-nginx:1.0 .
docker container run -p 80:80 --rm --name docker-container -d docker-nginx:1.0
