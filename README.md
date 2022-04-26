# 后端nodejs接口+mysql
## 使用express框架
调用：
```
1.myapp文件夹下npm start启动项目
2.本地安装mysql然后启动服务
3.www-app.js编写接口，demo写了一个post和一个get
3.局域网内http://localhost:3000/xx调用编写的接口
```

express的使用：
https://blog.csdn.net/wy313622821/article/details/123459698  
mysql安装和配置教程：
https://blog.csdn.net/bobo553443/article/details/81383194  
mysql的常用语句：
```
mysql -u root -p 输入密码后就会进入MySQL的操作管理界面
查看数据库列表  show databases；
进入test数据库 use test；
查看test库所有表  show tables;
退出MySQL的操作管理界面  quit

创建数据库 mysql> create DATABASE <数据库名>;
删除数据库 drop database <数据库名>;
选中某个数据库 use <数据库名>;
创建数据表 CREATE TABLE table_name (column_name column_type,column_name column_type...);
                                                      字段1  数据类型
删除数据表 DROP TABLE table_name;
插入数据：
INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );
或者：
insert into userid values(3,'王五','女');
查询数据：
SELECT column_name,column_name
FROM table_name
[WHERE Clause]
[LIMIT N][ OFFSET M]
查询某个用户id=1的信息：
select * from tablename WHERE id=1
查询某个表所有数据：
select * from tablename;
删除表：
Delete  from 表名;
删除某条数据：
DELETE FROM userid WHERE id=3;
表的数据类型可以是：
https://www.runoob.com/mysql/mysql-data-types.html
更新表里某一条数据里某个字段：
UPDATE userid SET name='东皇太一' WHERE id=1


```
