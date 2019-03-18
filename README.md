# Docker with Node learn-example

## pre-request
[docker compose](https://docs.docker.com/compose/install/)

## Usage

#### docker compose
```sh
npm install

# run
docker-compose up
```
#### docker image
```sh
# build image
docker build -t node-test .

# run image
docker run -p 8000:8000 node-test
```

