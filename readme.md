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

## 创建 react component

创建一个 `Message`组件

src\Message.tsx

```tsx
/* 
文件后缀说明
- tsx 用于 react 中的 component
- ts  用于一般的 ts文件

编写组件的方式
- 函数 function （普遍使用，推荐）
- 类 class 
 */
function Message() {
	// JSX: JavaScript XML
	// Converting tool:https://babeljs.io/repl
	const name = "Nathan";
	if (name) return <h1>Hello {name}</h1>;
	return <h1>Hello React</h1>;
}
// 导出
export default Message;
```

在组件 `App.tsx`中引入

src\App.tsx

```tsx
import Message from "./Message";

function App() {
	return (
		<div>
			<Message />
		</div>
	);
}
export default App;
```



