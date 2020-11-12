--- 
title: Mysql覆盖索引与回表
date: 2020-09-09
categories: 
 - database
tags: 
 - database
 - 笔记
---

### 一、覆盖索引
覆盖索引（covering index）指一个查询语句的执行只用从索引中就能够取得，不必从数据表中读取。也可以称之为实现了索引覆盖。
如果一个索引包含了（或覆盖了）满足查询语句中字段与条件的数据就叫做覆盖索引。

### 二、如何实现索引覆盖
> 常见的方法是：将被查询的字段，建立到联合索引里去。


- [mysql覆盖索引与回表](https://www.jianshu.com/p/8991cbca3854)
- [MySQL覆盖索引](https://www.jianshu.com/p/77eaad62f974)






























