FROM node:20.1.0-alpine as builder

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

COPY . .

RUN pnpm build

FROM nginx:alpine as base

ARG ENV

COPY --from=builder /app/build /usr/share/nginx/html/docs

COPY ./nginx/nginx.${ENV}.conf /etc/nginx/nginx.conf
