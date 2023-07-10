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



## React 工作原理

在`App.tsx`组件中引入一个作为子组件的`Message.tsx`组件可以看作为如下的（右）的树形结构

![image-20230710063129859](assets/readme-images/image-20230710063129859.png)

而 React 中一个组件实际上是一个虚拟DOM（Virtual DOM），通过 ReactDom 转换为 真实 DOM（Real DOM ）。具体是通过对比前后的虚拟DOM的差异，选择渲染（转换）为真实 DOM。

![image-20230710063405311](assets/readme-images/image-20230710063405311.png)



上述的 `ReactDom`可以从 `package.json` 中查看

```json
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
},
```

代码层面的转换过程是在 `index.html`中引入了`main.tsx`文件，此文件中包含将组件从虚拟DOM 转为 真实 DOM 代码

![image-20230710063641396](assets/readme-images/image-20230710063641396.png)

完整代码如下：

index.html

```html
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
</body>
```

src\main.tsx

```tsx
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
```

## 创建 ListGroup组件

使用的 UI框架：https://getbootstrap.com/docs/5.3/getting-started/introduction/

安装 bootstrapUI框架

```bash
$ npm i bootstrap@5.2.3
```

修改使用的样式文件，采用 bootstrap

src\main.tsx

```diff
- import './index.css'
+ import "bootstrap/dist/css/bootstrap.css";
```

创建新的组件 ListGroup 

src\components\ListGroup.tsx

```jsx
function ListGroup() {
	return (
		<ul className='list-group'>
			<li className='list-group-item'>An item</li>
			<li className='list-group-item'>A second item</li>
			<li className='list-group-item'>A third item</li>
			<li className='list-group-item'>A fourth item</li>
			<li className='list-group-item'>And a fifth one</li>
		</ul>
	);
}
export default ListGroup;
```

修改组件从 Message 为 ListGroup

src\App.tsx

```jsx
import ListGroup from './components/ListGroup';
function App() {
	return (
		<div>
			<ListGroup />
		</div>
	);
}
export default App;
```

