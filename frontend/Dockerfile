#frontend
FROM node:alpine

RUN apk add --no-cache curl

WORKDIR /react/reactapp

COPY . .

RUN npm install

# npm log seviyesini 'info' olarak ayarlayın, böylece uyarılar da dahil olmak üzere daha fazla bilgi alırsınız
ENV npm_config_loglevel=info

CMD ["npm","start"]