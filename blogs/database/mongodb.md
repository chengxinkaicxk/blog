--- 
title: mongodb
date: 2019-10-19
categories: 
 - database
tags: 
 - database
 - 笔记
---

# mongodb

## 常用命令行查询语句

### 根据数组字段长度查询

1. `db.data.find({ $where: "this.num.length < 3" })`，语法灵活，但是速度比较慢

2. `db.data.find({ "num.2": {$exists:0} })`，数组大小小于3，就意味着num[2]不存在
3. `db.data.find({ "num.3": {$exists:1} })`，要求数组大小大于3

