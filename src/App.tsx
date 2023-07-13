import Alert from './components/Alert';

function App() {
	return (
		<div>
			<Alert>
				{/* 传递子节点 */}
				Hello <span>React</span>
			</Alert>
		</div>
	);
}
export default App;
