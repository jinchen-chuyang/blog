---
title: ue5导入kbe插件
author: trb
date: '2023-04-07'
---

### 0.生成sdk并复制到工程目录
gensdk.bat
```
@echo off
set curpath=%~dp0

cd ..
set KBE_ROOT=%cd%
set KBE_RES_PATH=%KBE_ROOT%/kbe/res/;%curpath%/;%curpath%/scripts/;%curpath%/res/
set KBE_BIN_PATH=%KBE_ROOT%/kbe/bin/server/

if defined uid (echo UID = %uid%)

echo KBE_ROOT = %KBE_ROOT%
echo KBE_RES_PATH = %KBE_RES_PATH%
echo KBE_BIN_PATH = %KBE_BIN_PATH%

cd %curpath%
start /wait "" "%KBE_BIN_PATH%/kbcmd.exe" --clientsdk=ue5 --outpath="%curpath%/kbengine_ue5_plugins" || goto task_copy

:task_copy
set UE5_SDK_PATH=path/to/project_0_ue5/Plugins/kbengine_ue5_plugins
xcopy "%curpath%/kbengine_ue5_plugins" "%UE5_SDK_PATH%" /E /Y /F

if not defined ktall (ping -n 5 127.1>nul)
```  


### 1.添加Account实现
Account.h
```cpp
#pragma once

#include "../Engine/KBECommon.h"
#include "../Engine/AccountBase.h"

namespace KBEngine
{
	class Account : public AccountBase
	{
	public:
		Account();
		virtual ~Account();
		virtual void __init__() override;
		virtual void onDestroy() override;

	private:

	};
	
}
``` 

Account.cpp
```cpp
#include "Account.h"
#include "../Engine/KBEngine.h"
#include "../Engine/KBEvent.h"

namespace KBEngine
{
	KBEngine::Account::Account()
	{

	}

	KBEngine::Account::~Account()
	{

	}

	void KBEngine::Account::__init__()
	{
		// 登录
		UKBEventData_onLoginSuccessfully* EventData = NewObject<UKBEventData_onLoginSuccessfully>();
		EventData->entity_uuid = KBEngineApp::getSingleton().entity_uuid();
		EventData->entity_id = id();
		KBENGINE_EVENT_FIRE("OnLoginSuccessfully", EventData);
	}

	void KBEngine::Account::onDestroy()
	{
		// 注销
		KBENGINE_DEREGISTER_ALL_EVENT();
	}
}
``` 


### 2.修改配置文件添加依赖插件
假设工程名为project_0_ue5  
project_0_ue5.uproject
```json
	"Plugins": [
		{
			"Name": "ModelingToolsEditorMode",
			"Enabled": true,
			"TargetAllowList": [
				"Editor"
			]
		},// 以下条目是添加的，别忘了这个逗号
		{
			"Name": "KBEnginePlugins",
			"Enabled": true,
			"MarketplaceURL": "http://kbengine.org/marketplace"
		}
	]
```

project_0_ue5\Source\project_0_ue5\project_0_ue5.Build.cs
```
	// 添加了"KBEnginePlugins"
	PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore", "KBEnginePlugins" });
```


### 3.重新生成工程文件并编译
project_0_ue5.uproject -> 右键 -> Generate Visual Studio project files -> 重编project_0_ue5.sln即可。