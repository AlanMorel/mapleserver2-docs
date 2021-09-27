FROM node:alpine as base

ARG ENV

WORKDIR /app

COPY package.json yarn.lock ./

RUN npx browserslist@latest --update-db && rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean

COPY . .

RUN yarn build

CMD ["yarn", "serve", "--port", "8084"]

FROM base as production
