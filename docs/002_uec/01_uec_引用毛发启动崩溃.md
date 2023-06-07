---
title: unreal engine 5 引用毛发系统引擎启动崩溃
author: trb
date: '2023-01-14'
---

### 引用毛发系统
```cpp
UPROPERTY(VisibleAnywhere)
UGroomComponent* Hair;

UPROPERTY(VisibleAnywhere)
UGroomComponent* Eyebrow;
```

### 添加引用模块
```cpp
PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore", "Niagara", "HairStrandsCore" });
```

编译可以通过，但是启动引擎会奔溃，如图
![](https://jinchen-chuyang.github.io/blog/ue5/00000_loading_fail.png)

### 添加插件
![](https://jinchen-chuyang.github.io/blog/ue5/00001_plugin_groom.png)
