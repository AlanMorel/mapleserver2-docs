---
sidebar_position: 4
---

# Frequently-seen Errors

### MapleServer2.Data.Static.ItemMetadataStorage threw an exception.

You need to run GameDataParser (and let it finish running), steps are detailed here: https://discord.com/channels/783045053501276170/803771518923440128/803771824151855124.

### Unknown column '' in 'x' or Table 'x' doesn't exist

You need to drop the database. If you have DBeaver set up then you can right click on the `Maple2DB` database and then delete it. If you don't have DBeaver set up then you can use command prompt / terminal by following these steps:

1. Navigate to your MariaDB/MySQL install, probably located here: `C:\Program Files\MariaDB 10.5\bin`
2. Open command prompt / terminal in that directory
3. Enter `mysql -u root -p`
4. Enter the password to the db that you chose when you installed it
5. Enter `DROP DATABASE Maple2DB`;

### MySql.Data.MySqlClient.MySqlException: 'Access denied for user'root'@'localhost' (using password: YES)'

You need to fix your .env file, the username or password are incorrect.

### Debug profile does not exist

Run the server in Debug, not Release.
