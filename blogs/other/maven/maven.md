--- 
title: Maven笔记
date: 2020-06-09
categories: 
 - 其它
tags: 
 - maven
---

<!-- more -->
## 多模块修改版本号
1. 设置新的版本号 mvn versions:set -DnewVersion=2.10.21
2. 当新版本号设置不正确时可以撤销新版本号的设置 mvn versions:revert
3. 确认新版本号无误后提交新版本号的设置 mvn versions:commit
## mvn指令下载jar包
> mvn dependency:get -DrepoUrl=http://nexushost.paas.x/#browse/browse:maven-public/ -Dartifact=groupid:artifactid:2.10.0

## 跳过测试用例选项
> -Dmaven.test.skip=true

