FROM node:alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN npx browserslist@latest --update-db && rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean

COPY . .

RUN yarn build

FROM nginx:alpine as base

ARG TZ

ARG ENV

ENV TZ ${TZ}

COPY --from=builder /app/build /usr/share/nginx/html/docs

COPY ./nginx/nginx.${ENV}.conf /etc/nginx/nginx.conf
