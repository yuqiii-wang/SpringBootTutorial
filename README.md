# Spring Boot Tutorial

An easy to follow spring boot tutorial, inclusive of major fullstack topics, including
1. Frontend, JS, CSS, HTML
2. Database (MySql) CRUD
3. Backend Control

Tested on Ubuntu-18.

**How to start**

* Get MySql Database Ready

Install MySql
```bash
sudo apt-get update
sudo apt-get install mysql-server
sudo apt-get install mysql-client
```

Grant Privileges and load data (use absolute `FakeCompany.sql` file path in your computer),
login MySql by `sudo mysql`

```sql
# Check users' privileges
SELECT user,authentication_string,plugin,host FROM mysql.user;

# Grant privileges
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'P@ssw0rd';

# Reload privileges 
FLUSH PRIVILEGES;

# load data
source /absolute/path/to/FakeCompany.sql;

EXIT
```
P.S. After the configuration of MySql access privilege, you might want to login
MySql by `mysql -h localhost -u root -p` followed by typing the previously 
defined password (here `P@ssw0rd`).

Configure `src/main/resources/application.properties`, you can change database
configuration according to your defined database.
```txt
spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/mysql
spring.datasource.username=root
spring.datasource.password=P@ssw0rd
```

* Compile code (install Maven first if not yet 
install by `sudo apt-get install maven`)
```bash
mvn clean package
java -jar target/spring_boot_tutorial-0.0.1-SNAPSHOT.jar
```

* Test on Browser

Open browser and goto `localhost:8081` to view the index page.

Goto `localhost:8081/demo/all` to see retrieved dataset.