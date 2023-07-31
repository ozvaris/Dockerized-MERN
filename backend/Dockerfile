# backend
FROM node:alpine

WORKDIR /node/nodeapp

COPY . .

RUN npm install

RUN npm install cors --save

CMD ["npm","start"]