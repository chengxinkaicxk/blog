--- 
title: JPA
date: 2020-06-15
categories: 
 - 后端
tags: 
 - jpa
---
::: tip
JPA为Java开发人员提供了一种对象/关联映射工具来管理Java应用中的关系数据，它提供了一套持久层操作数据的API，极大的简化了持久层的开发。
:::

## JPA介绍
```javascript
JPA为Java开发人员提供了一种对象/关联映射工具来管理Java应用中的关系数据，它提供了一套持久层操作数据的API，极大的简化了持久层的开发。
```

## JPA包括的技术

1. ORM映射元数据
​	JPA支持XML和JDK5.0注释两种元数据形式，元数据描述对象和表之间的映射关系，框架据此将实体对象持久化到数据库表中。
2. Java持久化API
​	用来操作实体对象，执行CRUD操作，框架在后台替我们完成所有的事情，开发者可以从繁琐的JDBC和SQL代码中解脱出来。
3. 查询语言（JPQL）
​	这是持久化操作中很重要的一个方面，通过面向对象而非面向数据库的查询语言查询数据，避免程序的SQL语句紧密耦合。

## 对象/关系映射

- @Entity

  用于添加在实体类上，定义该JAVA类成为被JPA管理的实体，将映射到指定的数据库表。

- @Table

  指定数据库的表名,与@Entity一同使用。

- @Id

  定义属性为数据库表中的主键列，一个实体里面必须有一个。

- @GeneratedValue

  主键生成策略。属性strategy，id的生成策略，GenerationType.TABLE，通过表产生主键，框架由表模拟序列产生主键，使用该策略可以使应用更易于数据库移植；GenerationType.SEQUENCE，通过序列产生主键，通过@SequenceGenerator注解指定序列名，MySql不支持这种方式；GenerationType.IDENTITY,数据库id自增长，多用于MySql；GenerationType.AUTO,JPA自动选择合适的策略，默认选项。

- @Column

  定义该属性对应数据库中的列名。

  - 属性name，数据库中的列名。如果不写默认和实体属性名一致；
  - 属性unique，是否唯一。默认false；
  - 属性nullable，是否允许为空。默认为true；
  - 属性insertable，执行insert操作的时候是否包含此字段，默认为true；
  - 属性updatable，执行updatable操作的时候是否包含此字段，默认为true；
  - 属性columnDefinition，表示该字段在数据库中的实际类型。
  - 属性length，数据库字段的长度，默认255；
