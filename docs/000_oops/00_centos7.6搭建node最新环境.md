---
title: centos7.6搭建node最新环境
author: trb
date: '2022-12-08'
---

### 环境搭建步骤
1. 安装gcc8.3.0，[参考](https://blog.csdn.net/weixin_45661908/article/details/123928463)；
2. 安装glibc2.28，[参考1](https://cloud.tencent.com/developer/article/2021784)； [参考2](http://javabin.cn/2019/glibc_err.html) 关键点make localedata/install-locales，不然中文显示咋都乱码
3. 安装nodejs18.4，[参考](http://wjhsh.net/zhaodagang8-p-10880994.html)中方法一，加软连接；

### 遭受的毒打
1. 没有被封服务器镜像，高导致搞坏环境后只能重新编译；
2. ln -s 和 sln 不一样；
3. 升级gcc环境不能步子迈太大，从4.8.5升级到12.2.0后glibc2.28，glibc2.32都编译不过；
4. 不能存档，迁移的博客还是别碰了，于是[弃医](https://github.com/Mereithhh/vanblog)[从文](https://github.com/mqyqingfeng/Blog)；
5. docer得加紧熟悉了；