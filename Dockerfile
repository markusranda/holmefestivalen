FROM node:latest

WORKDIR /usr/src/app

COPY build ./build/
COPY server.js .
COPY package.json .
COPY package-lock.json .

RUN npm clean-install
