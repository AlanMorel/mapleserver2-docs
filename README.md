# mapleserver2-docs

Install node, npm, clone this repository, then install the dependencies

```sh
git clone https://github.com/AlanMorel/mapleserver2-docs
```

```sh
cd mapleserver2-docs
```

```sh
npm install yarn -g
```

```sh
yarn install
```

Create a `.env` file

```sh
VERSION=0
NODE_ENV=development
PORT=8084
URL=http://maplememe.localhost/docs
```

Start the server using `yarn`

```sh
yarn start
```

Visit `http://localhost:8084/docs` to see the app running.

## Docker

You can run the app using docker

```sh
docker compose up
```

When you run the app using docker, the port is not exposed to the host machine. This means that you will need to either expose it yourself or use a reverse proxy like NGINX to make it accessible.
