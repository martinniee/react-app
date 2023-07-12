import ListGroup from './components/ListGroup';
function App() {
	let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

	return (
		<div>
			<ListGroup
				// 传入参数
				items={items}
				heading='Cities'
			/>
		</div>
	);
}
export default App;
