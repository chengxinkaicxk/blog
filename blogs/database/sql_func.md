--- 
title: SQL常用函数
date: 2020-08-03
categories: 
 - 数据库
tags: 
 - 数据库
 - SQL
---

# Mysql常用函数

## 查询当前时间为本周的第几天
> SELECT WEEKDAY(CURDATE()) AS TIME

注： 从周一开始算，周一为0、周二为1、周三为2、周四为3、周五为4、周六为5、周日为6）

## 查询当前周的周一(等同于oracle数据库中的的TRUNC(SYSDATE, ‘IW’)函数)
> SELECT DATE_SUB(CURDATE(),INTERVAL WEEKDAY(CURDATE()) DAY) AS TIME

## 查询当前周的周日
> SELECT DATE_SUB(CURDATE(),INTERVAL WEEKDAY(CURDATE())-6 DAY) AS TIME

## 查询当前月份的最后一天
> SELECT LAST_DAY(CURDATE()) AS TIME



参考：https://www.yiibai.com/mysql/functions.html

