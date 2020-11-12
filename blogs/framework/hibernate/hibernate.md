--- 
title: Hibernate框架笔记
date: 2020-08-04
categories: 
 - 后端
 - 框架
tags: 
 - Hibernate
---


## Hibernate参数绑定

### 按参数名称绑定
在HQL或者SQL中定义参数用 ":" 开头
> from User user where user.name=:customername

然后用Query接口的setXXX()方法进行参数绑定，setXXX()方法包含两个参数，分别是命名参数名称和命名参数实际值。
> query.setString("customername",name)

### 按参数位置邦定
在HQL或者SQL中定义参数使用 "?" 来定义参数位置
> from User user where user.name = ?

同样使用setXXX()方法设定绑定参数，只不过这时setXXX()方法的第一个参数代表邦定参数在HQL语句中出现的位置编号（由0开始编号），第二个参数仍然代表参数实际值。
> query.setString(0,name);

### setParameter()方法
在Hibernate的HQL或者SQL查询中可以通过setParameter()方法邦定任意类型的参数
> String hql="from User user where user.name=:customername ";<br/>
> Query query=session.createQuery(hql);<br/>
> query.setParameter(“customername”,name,Hibernate.STRING);<br/>

setParameter()方法包含三个参数，分别是命名参数名称，命名参数实际值，以及命名参数映射类型。对于某些参数类型 setParameter()方法可以根据参数值的Java类型，猜测出对应的映射类型，因此这时不需要显示写出映射类型，像上面的例子，可以直接这样写:query.setParameter("customername",name);
**但是对于一些类型就必须写明映射类型，比如java.util.Date类型，因为它会对应Hibernate的多种映射类型，比如Hibernate.DATA或者Hibernate.TIMESTAMP。**



