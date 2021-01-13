--- 
title: 高质量sql建议
date: 2020-08-03
categories: 
 - 数据库
tags: 
 - 数据库
 - SQL
---

# 书写高质量SQL的30条建议

## 1、查询SQL尽量不要使用select *, 而是select 具体字段
- 反例
> select * from table

- 正例
> select id from table

理由:
- 只取需要的字段，节省资源、减少网络开销。
- select * 进行查询时，很可能就不会使用到覆盖索引了，就会造成回表查询。

## 2、如果知道查询结果只有一条或者只要最大/最小一条记录，建议用limit 1
