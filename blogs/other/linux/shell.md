--- 
title: Shell基础
date: 2020-11-23
categories: 
 - 其它
tags: 
 - linux
---
::: tip 介绍
可以学习到shell基础知识
:::


## 一、Shell变量
### 1.1 定义变量
定义变量时,变量名不加美元符号,如:`your_name="uzi"`
>注意,变量名和等号之间不能有空格,这可能和你熟悉的所有编程语言都不一样.同时,变量名的命名须遵循如下规则:
 
1. 命名只能使用英文字母,数字和下划线,首个字符不能以数字开头.
2. 中间不能有空格,可以使用下划线（_）.
3. 不能使用标点符号.
4. 不能使用bash里的关键字（可用help命令查看保留关键字）.
### 1.2 使用变量
使用一个定义过的变量,只要在变量名前面加美元符号即可,如:
```javascript
your_name="xxx"
echo $your_name
echo ${your_name}
```
> 变量名外面的花括号是可选的,加不加都行,加花括号是为了帮助解释器识别变量的边界.推荐给所有变量加上花括号,这是个好的编程习惯.

### 1.3 只读变量
使用 readonly 命令可以将变量定义为只读变量,只读变量的值不能被改变.

下面的例子尝试更改只读变量,结果报错:
```javascript
#!/bin/bash
myUrl="http://www.google.com"
readonly myUrl
myUrl="http://www.runoob.com"
```

### 1.4 删除变量
使用 unset 命令可以删除变量.语法:`unset variable_name`.

变量被删除后不能再次使用.unset 命令不能删除只读变量.

实例：
```javascript
#!/bin/sh
myUrl="http://www.baidu.com"
unset myUrl
echo $myUrl
以上实例执行将没有任何输出.
```
### 1.5 Shell字符串
#### 1.5.1 获取字符串长度
```javascript
string="abcd"
echo ${#string} #输出 4
```
#### 1.5.2 截取字符串
以下实例从字符串第 2 个字符开始截取 4 个字符:
```javascript
string="runoob is a great site"
echo ${string:1:4} # 输出 unoo
```
### 1.6 Shell注释
#### 1.6.1 单行注释
以 # 开头的行就是注释,会被解释器忽略.

通过每一行加一个 # 号设置多行注释,像这样:
```javascript
#--------------------------------------------
# 这是一个注释
# author：zhangly
# site：www.baidu.com
# slogan：学的不仅是技术，更是梦想！
#--------------------------------------------
##### 用户配置区 开始 #####
#
#
# 这里可以添加脚本描述信息
# 
#
##### 用户配置区 结束  #####
```

#### 1.6.2 多行注释
可以使用以下格式:
```javascript
:<<EOF
注释内容...
注释内容...
注释内容...
EOF
```
### 二、Shell参数传递
#### 2.1
我们向脚本传递三个参数,并分别输出,其中 $0 为执行的文件名:
```javascript
#!/bin/bash

echo "Shell 传递参数实例！";
echo "执行的文件名：$0";
echo "第一个参数为：$1";
echo "第二个参数为：$2";
echo "第三个参数为：$3";
```
```javascript
$#	传递到脚本的参数个数
$*	以一个单字符串显示所有向脚本传递的参数。 如"$*"用「"」括起来的情况、以"$1 $2 … $n"的形式输出所有参数。
$$	脚本运行的当前进程ID号
$!	后台运行的最后一个进程的ID号
$@	与$*相同，但是使用时加引号，并在引号中返回每个参数。 如"$@"用「"」括起来的情况、以"$1" "$2" … "$n" 的形式输出所有参数。
$-	显示Shell使用的当前选项，与[set命令]功能相同。
$?	显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误。
```

$* 与 $@ 区别:

- 相同点:都是引用所有参数.
- 不同点:只有在双引号中体现出来.假设在脚本运行时写了三个参数 1、2、3,则 " * " 等价于 "1 2 3"（传递了一个参数）,而 "@" 等价于 "1" "2" "3"（传递了三个参数）.

### 三、Shell数组
Shell 数组用括号来表示,元素用"空格"符号分割开,语法格式如下:
> array_name=(value1 ... valuen)

实例
```javascript
#!/bin/bash
my_array=(A B "C" D)
```
#### 3.1 读取数组
读取数组元素值的一般格式是:`${array_name[index]}`

实例
```javascript
#!/bin/bash

my_array=(A B "C" D)

echo "第一个元素为: ${my_array[0]}"
echo "第二个元素为: ${my_array[1]}"
echo "第三个元素为: ${my_array[2]}"
echo "第四个元素为: ${my_array[3]}"

A B C D
```
获取数组中的所有元素,使用@ 或 * 可以获取数组中的所有元素
```javascript
#!/bin/bash

my_array[0]=A
my_array[1]=B
my_array[2]=C
my_array[3]=D

echo "数组的元素为: ${my_array[*]}"
echo "数组的元素为: ${my_array[@]}"

结果：
数组的元素为: A B C D   
数组的元素为: A B C D  
```

获取数组长度的方法与获取字符串长度的方法相同，例如：
```javascript
#!/bin/bash

my_array[0]=A
my_array[1]=B
my_array[2]=C
my_array[3]=D

echo "数组元素个数为: ${#my_array[*]}"
echo "数组元素个数为: ${#my_array[@]}"

结果：
数组元素个数为: 4
```
### 四、Shell运算符
原生bash不支持简单的数学运算，但是可以通过其他命令来实现，例如 awk 和 expr，expr 最常用。
expr 是一款表达式计算工具，使用它能完成表达式的求值操作。
```javascript
注意：
1. 表达式和运算符之间要有空格，例如 2+2 是不对的，必须写成 2 + 2，这与我们熟悉的大多数编程语言不一样。
2. 完整的表达式要被 ` 反引号包含，注意这个字符不是常用的单引号，在 Esc 键下边。
```

#### 4.1 算术运算符
下面列出了常用的算术运算符，假定变量 a 为 10，变量 b 为 20：
```javascript
运算符	说明	举例
+	加	`expr $a + $b` 结果为 30。
-	减	`expr $a - $b` 结果为 -10。
*	乘	`expr $a * $b` 结果为 200。
/	除	`expr $b / $a` 结果为 2。
%	求余	`expr \$b % $a` 结果为 0。
=	赋值	a=$b 将把变量 b 的值赋给 a。
==	相等。用于比较两个数字，相同则返回 true。	[ $a == $b ] 返回 false。
!=	不相等。用于比较两个数字，不相同则返回 true。	[ $a != $b ] 返回 true。

注意：
1. 条件表达式要放在方括号之间，并且要有空格，例如: [\$a==$b] 是错误的，必须写成 [ \$a == $b ]。
2. 乘号(*)前边必须加反斜杠()才能实现乘法运算
3. 在 MAC 中 shell 的 expr 语法是：$((表达式))，此处表达式中的 "*" 不需要转义符号 "\" 。
```

#### 4.2 关系运算符
*关系运算符只支持数字，不支持字符串，除非字符串的值是数字。*
下表列出了常用的关系运算符，假定变量 a 为 10，变量 b 为 20：
```javascript
运算符	说明	举例
-eq	检测两个数是否相等，相等返回 true。	[ \$a -eq $b ] 返回 false。
-ne	检测两个数是否不相等，不相等返回 true。	[ \$a -ne $b ] 返回 true。
-gt	检测左边的数是否大于右边的，如果是，则返回 true。	[ \$a -gt $b ] 返回 false。
-lt	检测左边的数是否小于右边的，如果是，则返回 true。	[ \$a -lt $b ] 返回 true。
-ge	检测左边的数是否大于等于右边的，如果是，则返回 true。	[ \$a -ge $b ] 返回 false。
-le	检测左边的数是否小于等于右边的，如果是，则返回 true。	[ \$a -le $b ] 返回 true。

条件表达式要放在方括号之间，并且要有空格，例如: [$a==$b] 是错误的，必须写成 [ $a == $b ]。
```
#### 4.3 布尔运算符
```javascript
运算符	说明	举例
!	非运算，表达式为 true 则返回 false，否则返回 true。	[ ! false ] 返回 true。
-o	或运算，有一个表达式为 true 则返回 true。	[\$a -lt 20 -o $b -gt 100 ] 返回 true。
-a	与运算，两个表达式都为 true 才返回 true。	[ \$a -lt 20 -a $b -gt 100 ] 返回 false。
```
#### 4.4 逻辑运算符
以下介绍 Shell 的逻辑运算符，假定变量 a 为 10，变量 b 为 20:
```javascript
运算符	说明	        举例
&&	逻辑的AND	[[ $a -lt 100 && $b -gt 100 ]] 返回 false
||	逻辑的OR	[[ $a -lt 100 || $b -gt 100 ]] 返回 true
```

#### 4.5 字符串运算符
下表列出了常用的字符串运算符，假定变量 a 为 "abc"，变量 b 为 "efg"
```javascript

运算符	说明	                                举例
=	检测两个字符串是否相等，相等返回 true。	[ $a = $b ] 返回 false。
!=	检测两个字符串是否相等，不相等返回 true。	[ $a != $b ] 返回 true。
-z	检测字符串长度是否为0，为0返回 true。	[ -z $a ] 返回 false。
-n	检测字符串长度是否为0，不为0返回 true。	[ -n "$a" ] 返回 true。
$	检测字符串是否为空，不为空返回 true。	[ $a ] 返回 true。
```
#### 4.6 文件测试运算符
文件测试运算符用于检测 Unix 文件的各种属性。
```javascript
操作符	说明	                                        举例
-b file	检测文件是否是块设备文件，如果是，则返回 true。	[ -b $file ] 返回 false。
-c file	检测文件是否是字符设备文件，如果是，则返回 true。	[ -c $file ] 返回 false。
-d file	检测文件是否是目录，如果是，则返回 true。	[ -d $file ] 返回 false。
-f file	检测文件是否是普通文件（既不是目录，也不是设备文件），如果是，则返回 true。	[ -f $file ] 返回 true。
-g file	检测文件是否设置了 SGID 位，如果是，则返回 true。	[ -g $file ] 返回 false。
-k file	检测文件是否设置了粘着位(Sticky Bit)，如果是，则返回 true。	[ -k $file ] 返回 false。
-p file	检测文件是否是有名管道，如果是，则返回 true。	[ -p $file ] 返回 false。
-u file	检测文件是否设置了 SUID 位，如果是，则返回 true。	[ -u $file ] 返回 false。
-r file	检测文件是否可读，如果是，则返回 true。	[ -r $file ] 返回 true。
-w file	检测文件是否可写，如果是，则返回 true。	[ -w $file ] 返回 true。
-x file	检测文件是否可执行，如果是，则返回 true。	[ -x $file ] 返回 true。
-s file	检测文件是否为空（文件大小是否大于0），不为空返回 true。	[ -s $file ] 返回 true。
-e file	检测文件（包括目录）是否存在，如果是，则返回 true。	[ -e $file ] 返回 true。
```

### 五、Shell流程控制
if 语句语法格式：
```javascript
if condition
then
    command1 
    command2
    ...
    commandN 
fi
```
if else 语法格式：
```javascript
if condition
then
    command1 
    command2
    ...
    commandN
else
    command
fi
```
if else-if else 语法格式：
```javascript
if condition1
then
    command1
elif condition2 
then 
    command2
else
    commandN
fi
```
for循环一般格式为：
```javascript
for var in item1 item2 ... itemN
do
    command1
    command2
    ...
    commandN
done
```

while循环用于不断执行一系列命令，也用于从输入文件中读取数据；命令通常为测试条件。其格式为：
```javascript
while condition
do
    command
done
```
无限循环语法格式：
```javascript
while :
do
    command
done
```

until 循环执行一系列命令直至条件为 true 时停止。

until 循环与 while 循环在处理方式上刚好相反。

一般 while 循环优于 until 循环，但在某些时候—也只是极少数情况下，until 循环更加有用。

until 语法格式:
```javascript
until condition
do
    command
done
```
