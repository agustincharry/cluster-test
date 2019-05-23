FROM node:lts-alpine

LABEL name =  "MS1"
LABEL build_date = "2019-05-23"
LABEL version = "1.1"

ENV NODE_ENV=prod

WORKDIR /app
COPY . /app

RUN npm install --production
CMD node index.js