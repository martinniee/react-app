# React 学习笔记

> -   课程：[React Tutorial for Beginners - YouTube](https://www.youtube.com/watch?v=SqcY0GlETPk&t=0s&ab_channel=ProgrammingwithMosh)
> -   作者：Programming with Mosh
> -   时长：1:20:03
> -   计划：1-2 天
> -   周期：2023/07/10
> -   资源：

## 创建 React app

```bash
npm create vite@4.1.0
```

选择

```markdown
Proceed?: y
Project name: react-app
framework: React
variant: Typescript
```

```bash
# 安装依赖
npm i
# 运行服务
npm run dev
```

## 项目结构说明

```markdown
.
├── node_modules/ # 三方依赖包下载位置
├── public/ # 公共资源文件夹（图片，视频...）
├── src/ # 源代码文件夹
├── index.html # html 模板
├── package.json # 项目配置文件
├── tsconfig.json # typescript 配置文件
└── vite.config.ts # vite 配置文件
```
