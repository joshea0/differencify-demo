#!/bin/bash

# make a folder to hold screenshots, if it doesn't already exist
# we will mount this into the container so the test runner can store screenshots
mkdir -p screenshots

# build the local docker image
docker build -t differencify-example .

# run the docker image, mounting the following:
#   - our test file (test.js) to /app/index.js (is the the file executed by the container)
#   - our screenshots directory (this is where the test will store the screenshots)
docker run --shm-size 1G --rm -v "$(pwd)/example-test.js":/app/index.js -v "$(pwd)/screenshots":/screenshots differencify-example

