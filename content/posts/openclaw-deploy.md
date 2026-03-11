---
title: "OpenClaw + 飞书机器人部署教程"
date: 2026-03-11
draft: false
tags: ["OpenClaw", "AI Agent", "飞书机器人"]
categories: ["项目文档"]
description: "OpenClaw 本地部署与飞书机器人接入完整教程：包含 Node.js、Git 安装、模型配置与通讯渠道配置"
---
## 一、前置：环境配置

### 1.**安装node.js**
从链接下载安装包或在目标文件夹终端输入：
winget install --id OpenJS.NodeJS.LTS -e
https://nodejs.org/en/download
![](/images/openclaw/1.png)

### 2.**安装git**
Git在链接下载安装包或在目标文件夹终端输入：
winget install --id Git.Git -e --source winget
https://git-scm.com/install/windows
![](/images/openclaw/2.png)

## 二、clawbot安装
#### 1.**不挂梯方法**：
powershell分别输入：
“npm config set registry https://registry.npmmirror.com“
”npm i -g openclaw”

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
![](/images/openclaw/3.png)

#### 3. iwr -useb https://openclaw.ai/install.ps1 | iex
![](/images/openclaw/4.png)

#### 4.此处为风险告知
![](/images/openclaw/5.png)

#### 5.默认选择快速启动回车
![](/images/openclaw/6.png)

#### 6.选择大模型服务商
建议选择Kimi，会赠送新用户15元API额度
![](/images/openclaw/8.png)

#### 7.点击复制后确定
https://platform.moonshot.cn/console/account
![](/images/openclaw/7.png)

#### 8.密钥类型选择Kimi API key (.cn)
![](/images/openclaw/9.png)

#### 9.密钥获取方式选择粘贴
![](/images/openclaw/10.png)

#### 10.默认模型选择 随意
![](/images/openclaw/11.png)

#### 11.选择通讯渠道，先跳过
![](/images/openclaw/12.png)

#### 12.搜索引擎选择界面
![](/images/openclaw/13.png)

#### 13.配置Skills（掌握的技能）先跳过
![](/images/openclaw/14.png)

#### 14.配置Hook钩子 先跳过
![](/images/openclaw/15.png)

#### 15.之后会自动打开网关
![](/images/openclaw/16.png)

#### 16.若用户权限地打开失败进入任务计划程序找到Openclaw Gate way打开即可
![](/images/openclaw/17.png)

如果是找不到token
![](/images/openclaw/18.png)

在安装日志中找到token并+/复制到链接后即可访问
![](/images/openclaw/19.png)

#### 17.与ai对话有回答表名部署成功！
![](/images/openclaw/20.png)

## 三、openclaw通讯软件的接入
### 1.创建飞书机器人
以飞书为例，在开发者后台创建测试应用
https://open.feishu.cn/
![](/images/openclaw/21.png)

点击->权限管理-开通权限
![](/images/openclaw/22.png)

搜索"im:" ->全选-确认开通权限
![](/images/openclaw/23.png)

click创建版本
![](/images/openclaw/24.png)

保存后确认发布
![](/images/openclaw/25.png)

### 2.连接openclaw
#### 1.回到power shell输入:"openclaw config"
![](/images/openclaw/26.png)

#### 2.选择本机运行
![](/images/openclaw/27.png)

#### 3.选择Channels配置通讯渠道
![](/images/openclaw/28.png)

#### 4.选择Configure/link
![](/images/openclaw/29.png)

#### 5.找到飞书后回车
![](/images/openclaw/30.png)

#### 6.选择通过npm安装插件
![](/images/openclaw/31.png)

#### 7.安装完成后选择输入app secret
![](/images/openclaw/32.png)

#### 8.在开发者后台找到应用凭证->App Secret和AppID后粘贴到powershell
(注意右键是粘贴键)
![](/images/openclaw/33.png)
![](/images/openclaw/34.png)
![](/images/openclaw/35.png)

#### 9.通讯模式选择实时通讯
![](/images/openclaw/36.png)

#### 10.选择飞书->通讯政策选择所有群聊但要@机器人
![](/images/openclaw/37.png)

#### 11.选择Finished
![](/images/openclaw/38.png)

#### 12.是否马上配置私聊房策略 选yes策略选open任何人都可私聊
![](/images/openclaw/39.png)
![](/images/openclaw/40.png)

#### 13.最后完成选继续
![](/images/openclaw/41.png)
![](/images/openclaw/42.png)

#### 14.飞书->事件与回调->订阅方式->长连接->保存
![](/images/openclaw/43.png)
![](/images/openclaw/44.png)

#### 15.添加事件->搜索接收消息->勾选->添加
![](/images/openclaw/45.png)
![](/images/openclaw/46.png)

#### 16.权限管理->开通权限->搜索通讯录->勾选获取通讯录信息->开通
![](/images/openclaw/47.png)
![](/images/openclaw/48.png)

#### 18.再次发布版本以保存配置
创建版本->保存->确认发布
![](/images/openclaw/49.png)
![](/images/openclaw/50.png)

**本人忘记添加机器人能力** 勿忘 添加后再次发布
![](/images/openclaw/52.png)

### 3.测试
#### 1.在手机端找到自建应用入口->打开应用->对话->成功！*注：三月更新后飞书openclaw回复不稳定
![](/images/openclaw/51.png)
![](/images/openclaw/53.jpg)

完结撒花❀