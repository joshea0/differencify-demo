# differencify demo
This is a small demo of how to use [differencify](https://github.com/NimaSoroush/differencify) to run regression tests and generate screenshots with headless chrome via [puppeteer](https://github.com/GoogleChrome/puppeteer).

# requirements
- You will need [docker](https://docs.docker.com/install/)
- This guide and the example scripts assume you are on Linux or Mac

# usage
- clone this repo: `git clone https://github.com/joshea0/differencify-demo`
- change to the project base directory: `cd differencify-demo`
- execute the example script: `bash ./run-example.sh`
    - this script does the following:
        -  builds a local Docker image from the supplied Dockerfile
        -  uses the docker image to run the example test provided in `example-test.js`
    - your test output will be logged to the console
    - your test screenshots will be in the `./screenshots` directory (unless you customize the path, see below for details)

# modifying
To change the test that is run, edit `example-test.js`

If you wish to store the screenshots somewhere else, edit the docker run command by replacing `LOCAL_DIR_TO_STORE_SCREENSHOTS` with the absolute path to the directory where you'd like to store them:
```sh
docker run --shm-size 1G --rm -v "$(pwd)/example-test.js":/app/index.js -v "LOCAL_DIR_TO_STORE_SCREENSHOTS":/screenshots differencify-example
```

If you wish to store the screenshots somewhere else, edit the docker run command by replacing `TEST_FILE_PATH` with the absolute path to the `.js` file with your tests:
```sh
docker run --shm-size 1G --rm -v "TEST_FILE_PATH":/app/index.js -v "$(pwd)/screenshots":/screenshots differencify-example
```