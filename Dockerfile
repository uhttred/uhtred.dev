FROM node:18-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN yarn --ignore-optional && yarn cache clean --force
RUN yarn build

ARG PORT=3000
ENV PORT $PORT

EXPOSE $PORT

ENTRYPOINT ["node", ".output/server/index.mjs"]
