FROM node:16-bullseye-slim

ENV NPM_CONFIG_LOGLEVEL info
WORKDIR /app
COPY package.json /app
COPY index.js /app
RUN npm install

CMD node index.js
