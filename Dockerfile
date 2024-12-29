FROM node:latest

WORKDIR /usr/app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY ./src ./src

ENTRYPOINT [ "node", "src/index.js" ]