---
sidebar_position: 4
---

# charactercreateselect.xml

This determines to the client what classes are able to be selected and displayed upon character creation screen.
![image](https://i.imgur.com/36RJcM5.png)

## Group Name
### Data

### List

| element |                                                                                                           |
|---------|-----------------------------------------------------------------------------------------------------------|
| jobCode | job ID                                                                                                    |
| movie   | Path of the movie that previews the class (4)                                                             |
| descKey | Description of the job displayed (3). The key points to the id in /string/stringcharactercreateselect.xml |

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
