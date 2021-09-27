---
sidebar_position: 4
---

# Database Setup

1. Navigate to the `MapleServer2` solution folder and make a copy of `.env.example` and rename the copy to `.env`.

2. You must have a compatible database installed. When you install the database you'll be prompted to create a username and password which will be used in this step. All other settings in the install can be left as default or changed if you know what you're doing.

3. Then edit the values in your newly created `.env` file to match your environment, the default values are:

```
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
```

## Optional

1. Download a compatible database GUI tool. A tested and recommended tool is [DBeaver](https://dbeaver.io/download/). This is so you can visualize the data in the database.

2. Add a connection to the chosen compatible SQL database previously installed, in `DBeaver` this can be done by clicking the far left icon in the toolbar.
