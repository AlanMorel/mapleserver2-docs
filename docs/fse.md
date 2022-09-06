---
sidebar_position: 4
---

# Frequently-seen Errors

## System.IO.FileNotFoundException in MapleServer2/Data/Static/

You need to run GameDataParser (and let it finish running), steps are detailed in [resources setup](/docs/setup/resources-setup)

## Error while loading a character, related to database

You need to drop the database. If you have DBeaver set up then you can right click on the `Maple2DB` database and then delete it. If you don't have DBeaver set up then you can use command prompt / terminal by following these steps:

1. Navigate to your MySQL install, probably located here: `C:\Program Files\MySQL\MySQL Server 8.0\bin`

2. Open command prompt / terminal in that directory

3. Enter `mysql -u root -p`

4. Enter the password to the db that you chose when you installed it

5. Enter `DROP DATABASE Maple2DB;`

## MySql.Data.MySqlClient.MySqlException: 'Access denied for user'root'@'localhost' (using password: YES)'

You need to fix your .env file, the username or password are incorrect.
