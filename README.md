# mapleserver2-docs

Install node, npm, clone this repository, then install the dependencies

```sh
git clone https://github.com/AlanMorel/mapleserver2-docs
```

```sh
cd mapleserver2-docs
```

```sh
npm install pnpm -g
```

```sh
pnpm install
```

Create a `.env` file

```sh
VERSION=0
NODE_ENV=development
PORT=8084
URL=http://maplememe.localhost/docs
TZ=America/New_York
```

Start the server using `pnpm`

```sh
pnpm start
```

Visit `http://localhost:8084/docs` to see the app running.

## Docker

You can run the app using Docker

```sh
docker compose up
```

When you run the app using Docker, the port is not exposed to the host machine. This means that you will need to either expose it yourself or use a reverse proxy like NGINX to make it accessible.

## Github Actions

If you fork this repository, when you push, it will automatically trigger Github actions.

If you want to disable it, go to your fork's **Settings** > **Actions** > **Actions permissions** > **Disable Actions for this repository**.
