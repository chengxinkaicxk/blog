--- 
title: Spring MVC 源码分析
date: 2019-10-19
categories: 
 - 后端
tags: 
 - 源码
 - 笔记
---


## Spring MVC 源码分析

### 前端控制器（DispatcherServlet）
DispatcherServlet其实就是一个Servlet类，无非就是包装一层，通过url能够映射找到我们得SpringMvc中定义得请求方法。
同时，DispatcherServlet也是源码跟踪的入口类，从这里开始一步一步的分析整个源码流程。

