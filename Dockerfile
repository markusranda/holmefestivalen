FROM node:latest

WORKDIR /usr/src/app

COPY build .
COPY server.js .
COPY package.json .

RUN npm install
