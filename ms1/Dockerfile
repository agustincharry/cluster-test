FROM node:lts-alpine

ENV NODE_ENV=prod

WORKDIR /app
COPY package.json /app
RUN npm install --production
COPY . /app

CMD node index.js