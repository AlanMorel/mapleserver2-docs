---
sidebar_position: 4
---
# Database Setup

## Installing MySQL

1. Download and open the MySQL installer.

2. Select the **Developer Default** option and click next.

3. You can keep clicking next, download and install what is asking.

4. On **Accounts and Roles** step of `Configuration`, make sure to add an password and remember it, you will need it after. You don't need to add an user.

5. Keep clicking next and finish the setup.

## Configuring MapleServer2

1. Navigate to the `MapleServer2` solution folder and make a copy of `.env.example` and rename the copy to `.env`.

2. Then edit the values in your newly created `.env` file to match your environment. Change `DB_PASSWORD` to the password you used when installing MySQL. There is no need to modify the IP or Port unless you know what you are doing. The default values are:

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

## Optional

1. Download a compatible database GUI tool. A tested and recommended tool is [DBeaver](https://dbeaver.io/download/). This is so you can visualize the data in the database.

2. Add a connection to the chosen compatible SQL database previously installed, in `DBeaver` this can be done by clicking the far left icon in the toolbar.

3. Add database, username and password then click finish.
