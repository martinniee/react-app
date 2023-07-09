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
