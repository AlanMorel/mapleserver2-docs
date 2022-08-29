---
sidebar_position: 5
---

# Configuring MapleServer2

1. Navigate to the `MapleServer2` solution folder, make a copy of `.env.example` and rename the copy to `.env`.

2. Then edit the values in your newly created `.env` file to match your environment. That is, change `DB_PASSWORD` to the password you used when installing MySQL. There is no need to modify the IP or Port unless you know what you are doing. The default values are:

```sh
# Database Info
DB_IP=localhost
DB_PORT=3306
DB_NAME=Maple2DB
DB_USER=root
DB_PASSWORD=root

# Server Info
IP=127.0.0.1
GAME_PORT=21001
LOGIN_PORT=20001
NAME=Paperwood

# WebServer Info
WEB_PORT=3000
```
