(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{806:function(s,a,t){"use strict";t.r(a);var e=t(4),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[s._v("介绍")]),t("p",[s._v("介绍Redis的两种持久化方式（RDB和AOF）,以及一些常见的配置")])]),s._v(" "),t("h2",{attrs:{id:"redis持久化存储模式之rdb-redis-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis持久化存储模式之rdb-redis-database"}},[s._v("#")]),s._v(" Redis持久化存储模式之RDB（Redis DataBase）")]),s._v(" "),t("h3",{attrs:{id:"rdb概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rdb概述"}},[s._v("#")]),s._v(" RDB概述")]),s._v(" "),t("blockquote",[t("p",[s._v("RDB是指在指定时间间隔内，将内存中的数据集快照写入磁盘，也就是Snapshot快照，它恢复时是将快照文件直接读到内存中，来达到恢复数据的。")])]),s._v(" "),t("h3",{attrs:{id:"持久化机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持久化机制"}},[s._v("#")]),s._v(" 持久化机制")]),s._v(" "),t("blockquote",[t("p",[s._v("Redis会单独创建(fork)一个子进程来进行持久化，会先将数据写进一个临时文件中，等到持久化过程结束了，再用这个临时文件替换上次持久化好的文件。在这个过程中，只有子进程来负责IO操作，主进程仍然处理客户端的请求，这就确保了极高的性能。")])]),s._v(" "),t("h3",{attrs:{id:"快照-snapshot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快照-snapshot"}},[s._v("#")]),s._v(" 快照（Snapshot）")]),s._v(" "),t("blockquote",[t("p",[s._v("在默认情况下， Redis 将数据库快照保存在名字为 dump.rdb 的二进制文件中。通过触发快照的形式，来做到将指定时间间隔内的数据持久化到dump.rdb。例如，可以2分钟内持久化一次，将对数据库的写操作，备份到磁盘上的dump.rdb。如何触发持久化呢？可以通过查看或者设置redis.conf配置文件来指定触发规则。")])]),s._v(" "),t("p",[s._v("以下是redis配置文件的触发快照的默认配置"),t("br"),s._v(" "),t("img",{attrs:{src:"imgs/rbd_conf.png",alt:""}}),t("br"),s._v("\n配置文件中还有一些基础的配置项，如下："),t("br")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("#dbfilename：持久化数据存储在本地的文件\ndbfilename dump"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rdb\n#dir：持久化数据存储在本地的路径，如果是在"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".6")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("src下启动的redis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli，则数据会存储在当前src目录下\ndir "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n##snapshot触发的时机，save "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("seconds"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("changes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n##如下为"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),s._v("秒后，至少有一个变更操作，才会snapshot  \n##对于此值的设置，需要谨慎，评估系统的变更操作密集程度  \n##可以通过“save “””来关闭snapshot功能  \n#save时间，以下分别表示更改了"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("个key时间隔"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),s._v("s进行持久化存储；更改了"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("个key300s进行存储；更改"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("个key60s进行存储。\nsave "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsave "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\nsave "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\n##当snapshot时出现错误无法继续时，是否阻塞客户端“变更操作”，“错误”可能因为磁盘已满"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("磁盘故障"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OS")]),s._v("级别异常等  \nstop"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("writes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("on"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bgsave"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("error yes  \n##是否启用rdb文件压缩，默认为“yes”，压缩往往意味着“额外的cpu消耗”，同时也意味这较小的文件尺寸以及较短的网络传输时间  \nrdbcompression yes  \n")])])]),t("p",[s._v("snapshot触发的时机，是有“间隔时间”和“变更次数”共同决定，同时符合2个条件才会触发snapshot,否则“变更次数”会被继续累加到下一个“间隔时间”上。snapshot过程中并不阻塞客户端请求。snapshot首先将数据写入临时文件，当成功结束后，将临时文件重名为dump.rdb。\n需要注意的是，每次快照持久化都是将内存数据完整写入到磁盘一次，并不是增量的只同步脏数据。如果数据量大的话，而且写操作比较多，必然会引起大量的磁盘io操作，可能会严重影响性能。\n"),t("br"),s._v("\n其他自动触发机制:"),t("br"),s._v("\n除了save m n 以外和手动调用命令外，还有一些其他情况会触发bgsave：")]),s._v(" "),t("blockquote",[t("ol",[t("li",[s._v("在主从复制场景下，如果从节点执行全量复制操作，则主节点会执行bgsave命令，并将rdb文件发送给从节点")]),s._v(" "),t("li",[s._v("执行shutdown命令时，自动执行rdb持久化")])])]),s._v(" "),t("h3",{attrs:{id:"save-m-n-实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#save-m-n-实现原理"}},[s._v("#")]),s._v(" save m n 实现原理")]),s._v(" "),t("p",[s._v("Redis的save m n，是通过serverCron函数、dirty计数器、和lastsave时间戳来实现的。")]),s._v(" "),t("p",[s._v("serverCron是Redis服务器的周期性操作函数，默认每隔100ms执行一次；该函数对服务器的状态进行维护，其中一项工作就是检查 save m n 配置的条件是否满足，如果满足就执行bgsave。")]),s._v(" "),t("p",[s._v("dirty计数器是Redis服务器维持的一个状态，记录了上一次执行bgsave/save命令后，服务器状态进行了多少次修改(包括增删改)；而当save/bgsave执行完成后，会将dirty重新置为0。")]),s._v(" "),t("p",[s._v("例如，如果Redis执行了set mykey helloworld，则dirty值会+1；如果执行了sadd myset v1 v2 v3，则dirty值会+3；注意dirty记录的是服务器进行了多少次修改，而不是客户端执行了多少修改数据的命令。")]),s._v(" "),t("p",[s._v("lastsave时间戳也是Redis服务器维持的一个状态，记录的是上一次成功执行save/bgsave的时间。")]),s._v(" "),t("p",[s._v("save m n的原理如下：每隔100ms，执行serverCron函数；在serverCron函数中，遍历save m n配置的保存条件，只要有一个条件满足，就进行bgsave。对于每一个save m n条件，只有下面两条同时满足时才算满足：")]),s._v(" "),t("blockquote",[t("ol",[t("li",[s._v("当前时间-lastsave > m")]),s._v(" "),t("li",[s._v("dirty >= n")])])]),s._v(" "),t("h3",{attrs:{id:"snapshot执行流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#snapshot执行流程"}},[s._v("#")]),s._v(" Snapshot执行流程")]),s._v(" "),t("p",[t("img",{attrs:{src:"imgs/snapshot_process.png",alt:""}})]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" Redis父进程首先判断：当前是否在执行save，或bgsave"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bgrewriteaof（后面会详细介绍该命令）的子进程，如果在执行则bgsave命令直接返回。bgsave"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bgrewriteaof 的子进程不能同时执行，主要是基于性能方面的考虑：两个并发的子进程同时执行大量的磁盘写操作，可能引起严重的性能问题。\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 父进程执行fork操作创建子进程，这个过程中父进程是阻塞的，Redis不能执行来自客户端的任何命令\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" 父进程fork后，bgsave命令返回”Background saving started”信息并不再阻塞父进程，并可以响应其他命令\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.")]),s._v(" 子进程创建"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RDB")]),s._v("文件，根据父进程内存快照生成临时快照文件，完成后对原有文件进行原子替换\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.")]),s._v(" 子进程发送信号给父进程表示完成，父进程更新统计信息\n")])])]),t("h3",{attrs:{id:"rdb总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rdb总结"}},[s._v("#")]),s._v(" RDB总结")]),s._v(" "),t("h4",{attrs:{id:"rdb优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rdb优点"}},[s._v("#")]),s._v(" RDB优点")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 如果要进行大规模数据的恢复，"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RDB")]),s._v("方式要比"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("方式恢复速度要快。\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RDB")]),s._v("可以最大化Redis性能，父进程做的就是fork子进程，然后继续接受客户端请求，让子进程负责持久化操作，父进程无需进行"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IO")]),s._v("操作。\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RDB")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("是一个非常紧凑")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compact"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("的文件"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("它保存了某个时间点的数据集，非常适合用作备份，同时也非常适合用作灾难性恢复，它只有一个文件，内容紧凑，通过备份原文件到本机外的其他主机上，一旦本机发生宕机，就能将备份文件复制到redis安装目录下，通过启用服务就能完成数据的恢复。\n")])])]),t("h4",{attrs:{id:"rdb缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rdb缺点"}},[s._v("#")]),s._v(" RDB缺点")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RDB")]),s._v("这种持久化方式不太适应对数据完整性要求严格的情况，因为，尽管我们可以用过修改快照实现持久化的频率，但是要持久化的数据是一段时间内的整个数据集的状态，如果在还没有触发快照时，本机就宕机了，那么对数据库所做的写操作就随之而消失了并没有持久化本地dump"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rdb文件中。\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 每次进行"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RDB")]),s._v("时，父进程都会fork一个子进程，由子进程来进行实际的持久化操作，如果数据集庞大，那么fork出子进程的这个过程将是非常耗时的，就会出现服务器暂停客户端请求，将内存中的数据复制一份给子进程，让子进程进行持久化操作。\n")])])]),t("h2",{attrs:{id:"redis持久化存储模式之aof-append-only-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis持久化存储模式之aof-append-only-file"}},[s._v("#")]),s._v(" Redis持久化存储模式之AOF（Append Only  File）")]),s._v(" "),t("h3",{attrs:{id:"aof概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aof概述"}},[s._v("#")]),s._v(" AOF概述")]),s._v(" "),t("blockquote",[t("p",[s._v("以日志的形式记录Redis每一个写操作,将Redis执行过的所有写指令记录下来（读操作不记录），只许追加文件不可以改写文件，redis启动之后会读取appendonly.aof文件来实现重新恢复数据，完成恢复数据的工作。默认不开启，需要将redis.conf中的appendonly  no改为yes启动Redis。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"imgs/aof_conf1.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"imgs/aof_conf2.png",alt:""}})]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" always：每一条aof记录都立即同步到文件，这是最安全的方式，也以为更多的磁盘操作和阻塞延迟，是"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IO")]),s._v("开支较大。\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("everysec：每秒同步一次，性能和安全都比较中庸的方式，也是redis推荐的方式。如果遇到物理服务器故障，有可能导致最近一秒内aof记录丢失")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("可能为部分丢失"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("。\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" no：redis并不直接调用文件同步，而是交给操作系统来处理，操作系统可以根据buffer填充情况"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("通道空闲时间等择机触发同步；这是一种普通的文件操作方式。性能较好，在物理服务器故障时，数据丢失量会因"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OS")]),s._v("配置有关。\n")])])]),t("p",[s._v("一些常用的配置：")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("##此选项为aof功能的开关，默认为“no”，可以通过“yes”来开启aof功能  \n##只有在“yes”下，aof重写"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("文件同步等特性才会生效  \nappendonly yes  \n  \n##指定aof文件名称  \nappendfilename appendonly"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("aof  \n  \n##指定aof操作中文件同步策略，有三个合法值：always everysec no"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("默认为everysec  \nappendfsync everysec  \n##在aof"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rewrite期间，appendfsync是否暂缓文件同步，"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no"')]),s._v("表示“不暂缓”，“yes”表示“暂缓”，默认为“no”  \nno"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("appendfsync"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("on"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rewrite no  \n  \n#"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("#aof文件rewrite触发的最小文件尺寸")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("gb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("只有大于此aof文件大于此尺寸是才会触发rewrite，默认“"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("mb”，建议“"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("mb”  \nauto"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("aof"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rewrite"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("min"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("size "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("mb  \n  \n##相对于“上一次”rewrite，本次rewrite触发时aof文件应该增长的百分比。  \n#"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("#每一次rewrite之后，redis都会记录下此时“新aof”文件的大小")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("例如"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，那么当aof文件增长到"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("之后  \n##触发下一次rewrite，每一次aof记录的添加，都会检测当前aof文件的尺寸。  \nauto"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("aof"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rewrite"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("percentage "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("  \n")])])]),t("h3",{attrs:{id:"数据恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据恢复"}},[s._v("#")]),s._v(" 数据恢复")]),s._v(" "),t("blockquote",[t("p",[s._v("重启Redis时，如果dump.rdb与appendfsync.aof同时都存在时，Redis会自动读取appendfsync.aof文件，通过该文件中对数据库的日志操作，来实现数据的恢复。当然如果该文件被破坏，我们可以通过redis-check-aof工具来修复，如redis-check-aof --fix能修复破损的appendfsync.aof文件，当然如果dump.rdb文件有破损，我们也可以用redis-check-rdb工具来修复，如果appendfsync.aof文件破损了，是启动不客户端的，也就是无法完成数据的恢复。")])]),s._v(" "),t("h3",{attrs:{id:"重写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重写"}},[s._v("#")]),s._v(" 重写")]),s._v(" "),t("blockquote",[t("p",[s._v("重写原理：AOF文件持续增长过大时，会fork出一条新进程来将文件重写（也是临时文件最后再rename）,遍历新进程的内存中的数据，每条记录都会有一条set语句，重写aof文件的操作，并没有读取旧的aof文件，而是将整个内存中的数据库内容用命令的方式重写了一个新的aof文件，有点类似于快照。")])]),s._v(" "),t("blockquote",[t("p",[s._v("触发机制：Redis会记录上一次重写时的AOF大小，默认配置是当AOF文件大小是上一次的一倍并且大于64m时，会触发从写机制。")])]),s._v(" "),t("h3",{attrs:{id:"aof总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aof总结"}},[s._v("#")]),s._v(" AOF总结")]),s._v(" "),t("h4",{attrs:{id:"aof有点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aof有点"}},[s._v("#")]),s._v(" AOF有点")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("有着多种持久化策略：\n  appendfsync always"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("每修改同步，每一次发生数据变更都会持久化到磁盘上，性能较差，但数据完整性较好。\n\n  appendfsync everysec"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 每秒同步，每秒内记录操作，异步操作，如果一秒内宕机，有数据丢失。\n\n  appendfsync no"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("不同步。\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("文件是一个只进行追加操作的日志文件，对文件写入不需要进行seek，即使在追加的过程中，写入了不完整的命令（例如：磁盘已满），可以使用redis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("check"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("aof工具可以修复这种问题\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" Redis可以在"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("文件变得过大时，会自动地在后台对"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("进行重写：重写后的新的"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("文件包含了恢复当前数据集所需的最小命令集合。整个重写操作是绝对安全的，因为Redis在创建"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("文件的过程中，会继续将命令追加到现有的"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("文件中，即使在重写的过程中发生宕机，现有的"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("文件也不会丢失。一旦新"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("文件创建完毕，Redis就会从旧的"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("文件切换到新的"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("文件，并对新的"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("文件进行追加操作。\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("文件有序地保存了对数据库执行的所有写入操作。这些写入操作一Redis协议的格式保存，易于对文件进行分析；例如，如果不小心执行了"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FLUSHALL")]),s._v("命令，但只要"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("文件未被重写，通过停止服务器，移除"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("文件末尾的"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FLUSHALL")]),s._v("命令，重启服务器就能达到"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FLUSHALL")]),s._v("执行之前的状态。\n")])])]),t("h4",{attrs:{id:"aof缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aof缺点"}},[s._v("#")]),s._v(" AOF缺点")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 对于相同的数据集来说，"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("文件要比"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RDB")]),s._v("文件大。\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 根据所使用的持久化策略来说，"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("的速度要慢与"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RDB")]),s._v("。一般情况下，每秒同步策略效果较好。不使用同步策略的情况下，"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("与"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RDB")]),s._v("速度一样快。\n")])])]),t("p",[t("em",[s._v("参考链接：")])]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/canot/article/details/52886923",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis持久化存储(AOF与RDB两种模式)"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/qq_36795474/article/details/82938721?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis的两种持久化RDB和AOF"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);