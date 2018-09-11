### 索引简介
**CREATE INDEX**
常常被搜索的列（以及表）上面创建索引  
索引分为主键索引（primary key)、普通索引、唯一索引
1. 单索引
KEY 索引名称 （列名）
索引名称格式：index + 表名 + 字段名称；例如：index_table_id  
KEY index_table_id(id)

2. 双索引
KEY 索引名称（列名1，列名2）

索引名称格式：index + 表名 + 字段名称1 + 字段名称2：index_table_id_age  
KEY index_table_id_age(id, age)

### 创建索引
1. 创建单索引

```sql
create table student(
  id int(10),
  age int(20),
  key index_student_id(id)
)
```

2. 创建双索引

```sql
create table student(
  id int(10),
  age int(20),
  key index_student_id_age(id, age) // 普通索引
  UNIQUE INDEX index_student_id(id) // 唯一索引
)
```

3. 唯一索引

CREATE UNIQUE INDEX index_name ON table_name (column_name)

### 例子
```sql
-- –直接创建索引
CREATE INDEX index_user ON user(title)
-- –修改表结构的方式添加索引
ALTER TABLE table_name ADD INDEX index_name ON (column(length))
-- 给 user 表中的 name 字段 添加普通索引(INDEX)
ALTER TABLE `user` ADD INDEX index_name (name)
-- –创建表的时候同时创建索引
CREATE TABLE `user` (
    `id` int(11) NOT NULL AUTO_INCREMENT ,
    `title` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL ,
    `time` int(10) NULL DEFAULT NULL ,
    PRIMARY KEY (`id`),
    INDEX index_name (title(length)) // 普通索引
)
-- –删除索引
DROP INDEX index_name ON table
```
