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

Start the server using `yarn` or `docker`

```sh
yarn start
docker compose up
```

Visit `http://localhost:8084/docs` to see the app running.
