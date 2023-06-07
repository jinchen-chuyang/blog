---
title: Final IK 在场景中忽略了石头
author: trb
date: '2023-03-31'
---

### 1. 环境

```
unity 2021.3.6f1
Final IK 2.2
商店资源 Mars Landscape 3D
```

### 2. 问题描述
在导入依赖包之后，让玩家走到石头时，他。。。进去了。
![](https://jinchen-chuyang.github.io/blog/unity/00000_ik_fail.png)

### 3. 分析原因
创建cube,测试没有问题  
创建sphare,测试没有问题  
创建plane,测试没有问题  
Q群提供思路【有可能插件做了优化处理，优化了mesh数据或者collider数据】  
检查石头mesh,存在  
找了个石头的资源Rocks FREE pack,放了块石头进去，问题复现  
给石头添加Mesh Collider  
![](https://jinchen-chuyang.github.io/blog/unity/00001_ik_add_meshcollider.png)  
问题得到解决  
![](https://jinchen-chuyang.github.io/blog/unity/00002_ik_ok.png)  
但是资源【Mars Landscape 3D】中石头也不是GameObject,无法添加Mesh Collider，应该是优化所致。  
另外，Mesh Collider 组件中 Is Trigger不能勾选。  