--- 
title: Nginx配置文件
date: 2021-02-25
categories: 
 - 中间件
tags: 
 - nginx
---

### 1、Nginx配置文件组成
nginx的配置文件主要由三块组成：`全局配置块`、`events块`、`http块`，其中`http块`下又包含一个或多个`server块`，`server块`下又包含一个或多个`location`，如图：
![](./imgs/nginx_conf_structure.png)

```
...              #全局块

events {         #events块
   ...
}

http      #http块
{
    ...   #http全局块
    server        #server块
    { 
        ...       #server全局块
        location [PATTERN]   #location块
        {
            ...
        }
        location [PATTERN] 
        {
            ...
        }
    }
    server
    {
      ...
    }
    ...     #http全局块
}
```
- 1、全局块：配置影响nginx全局的指令。一般有运行nginx服务器的用户组，nginx进程pid存放路径，日志存放路径，配置文件引入，允许生成worker process数等。
- 2、events块：配置影响nginx服务器或与用户的网络连接。有每个进程的最大连接数，选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等。
- 3、http块：可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。如文件引入，mime-type定义，日志自定义，是否使用sendfile传输文件，连接超时时间，单连接请求数等。负载均衡（upstream）在该块的全局配置块中进行配置。
- 4、server块：配置虚拟主机的相关参数，一个http中可以有多个server。
- 5、location块：配置请求的路由，以及各种页面的处理情况。

### 2、全局块配置
```
# 定义Nginx运行的用户和用户组
# user nobady nobady;
# nginx进程数，建议设置为等于CPU总核心数,默认为1。
worker_processes 8;
#全局错误日志定义类型，[ debug | info | notice | warn | error | crit ]
error_log /usr/local/nginx/logs/error.log info;
#进程pid文件,指定nginx进程运行文件存放地址
pid /usr/local/nginx/logs/nginx.pid;
# 指定进程可以打开的最大描述符：数目
# 工作模式与连接数上限
# 这个指令是指当一个nginx进程打开的最多文件描述符数目，理论值应该是最多打开文件数（ulimit -n）与nginx进程数相除，但是nginx分配请求并不是那么均匀，所以最好与ulimit -n 的值保持一致。
# 现在在linux 2.6内核下开启文件打开数为65535，worker_rlimit_nofile就相应应该填写65535。
#这是因为nginx调度时分配请求到进程并不是那么的均衡，所以假如填写10240，总并发量达到3-4 万时就有进程可能超过10240了，这时会返回502错误。
worker_rlimit_nofile 65535;
```
### 3、events配置
```
events
{
 #参考事件模型，use [ kqueue | rtsig | epoll | /dev/poll | select | poll]; 
 #epoll模型是Linux 2.6以上版本内核中的高性能网络I/O模型，linux建议epoll。
 use epoll;
 #单个进程最大连接数（最大连接数=连接数*进程数）
 #根据硬件调整，和前面工作进程配合起来用，尽量大，但是别把cpu跑到100%就行。每个进程允许的最多连接数，理论上每台nginx服务器的最大连接数为。
 worker_connections 65535;
 #keepalive超时时间，默认是60s，切记这个参数也不能设置过大！否则会导致许多无效的http连接占据着nginx的连接数，终nginx崩溃！
 keepalive_timeout 60;
}
```
### 4、http配置
```
http{
 #文件扩展名与文件类型映射表
 include mime.types;
 #默认文件类型
 default_type application/octet-stream;
 #默认编码
 #charset utf-8;
 #sendfile指令指定 nginx 是否调用sendfile 函数（zero copy 方式）来输出文件，对于普通应用，必须设为on。如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络IO处理速度，降低系统uptime。
 sendfile on;
 #长连接超时时间，单位是秒
 keepalive_timeout 120;
}
```
#### 4.1、负载均衡（upstream）配置
```
# upstream xxx 负载均衡名字随意取
upstream lb{
#upstream的负载均衡，weight是权重，可以根据机器配置定义权重。weigth参数表示权值，权值越高被分配到的几率越大。
   server 192.168.80.121:80 weight=3;
   server 192.168.80.122:80 weight=2;
   server 192.168.80.123:80 weight=3;
}
```
nginx的upstream目前支持4种方式的配置：
1. 轮询（默认）
```
每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。
weight指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。
```
2. ip_hash
> 每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。

3. fair（第三方）
> 按后端服务器的响应时间来分配请求，响应时间短的优先分配。

4. url_hash（第三方）
> 按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。

#### 4.2、 虚拟主机的配置
http块中可以有多个server配置块，一个server配置块中可以有多个location配置块
```
server{
    # 监听端口
    listen       80;
    # 指定IP地址或者域名，多个域名之间用空格分开
    server_name  localhost;
    location / {
        # root指令用于指定虚拟主机的网页根目录
        root   html;
        # index用于设定访问的默认首页地址
        index  index.html index.htm;
    }
    location /api/ {
        # 反向代理配置
        proxy_pass http://lb;
    }
}
```
*注：*
更多配置详情参考：
- [https://blog.csdn.net/wangbin_0729/article/details/82109693](https://blog.csdn.net/wangbin_0729/article/details/82109693)
- [https://blog.csdn.net/tester_runing/article/details/104215385](https://blog.csdn.net/tester_runing/article/details/104215385)
