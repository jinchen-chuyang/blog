---
title: unreal engine 5 常用代码
author: trb
date: '2023-01-06'
---

### 控制台打印日志
```cpp
UE_LOG(LogTemp, Warning, TEXT("This is a console log."));
```

### 屏幕打印日志
```cpp
if (GEngine){
	GEngine->AddOnScreenDebugMessage(0, 60.f, FColor::Red, TEXT("This is a on screen msg."));
}
```

### 格式化字符串
```cpp
FString Msg = FString::Printf(TEXT("DeltaTime: %f"), DeltaTime);
```

### 暴露c++变量给编辑界面
```cpp
UPROPERTY(EditDefaultsOnly)
float Variable;
```

### 暴露c++变量给蓝图
```cpp
UPROPERTY(BlueprintReadOnly)
float Variable;
```

### 暴露c++函数给蓝图
```cpp
UFUNCTION(BlueprintPure)
float add(float f0, float f1);
```

### 给pawn添加胶囊(一般把胶囊作为根组件)
```cpp
// 头文件中添加定义
UPROPERTY(EditDefaultsOnly)
UCapsuleComponent* Capsule;

// 源文件中添加实例
Capsule = CreateDefaultSubobject<UCapsuleComponent>("Capsule");
Capsule->SetCapsuleSize(15, 10);
SetRootComponent(Capsule);
```

### 给pawn添加骨骼
```cpp
// 头文件中添加定义
UPROPERTY(EditDefaultsOnly)
USkeletalMeshComponent* BirdMesh;

// 源文件中添加实例
BirdMesh = CreateDefaultSubobject<USkeletalMeshComponent>("BirdMesh");
BirdMesh->SetupAttachment(GetRootComponent());
```

### 控制pawn移动
```cpp
AutoPossessPlayer = EAutoReceiveInput::Player0;
```

### 绑定运动轴向
```cpp
// 1.edit => project setting => engine => input => axis mapppings 添加w,s键作为moveforward的映射
// 2.头文件中添加定义 
UPROPERTY(VisibleAnywhere)
UFloatingPawnMovement* PawnMovement;

void MoveForward(float Value);

// 3.源文件中添加实例
PawnMovement = CreateDefaultSubobject<UFloatingPawnMovement>("PawnMovement");

void ABird::MoveForward(float Value)
{
	UE_LOG(LogTemp, Warning, TEXT("MoveForward Value=%f"), Value);
	if (Controller && Value != 0.f)
	{
		FVector forward = GetActorForwardVector();
		AddMovementInput(forward, Value);
	}
}

void ABird::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
	Super::SetupPlayerInputComponent(PlayerInputComponent);

	PlayerInputComponent->BindAxis("MoveForward", this, &ABird::MoveForward);
}
```

### 添加摄像机及吊杆
```cpp
// 头文件中添加定义
UPROPERTY(VisibleAnywhere)
USpringArmComponent* CameraBoom;

UPROPERTY(VisibleAnywhere)
UCameraComponent* FollowCamera;

// 源文件中添加实例
CameraBoom = CreateDefaultSubobject<USpringArmComponent>("CameraBoom");
CameraBoom->TargetArmLength = 300.f;
CameraBoom->SetupAttachment(GetRootComponent());

FollowCamera = CreateDefaultSubobject<UCameraComponent>("FollowCamera");
FollowCamera->SetupAttachment(CameraBoom);
```