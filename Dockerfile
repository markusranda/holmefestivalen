FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN npm clean-install

RUN npm run-script build
