import ListGroup from './components/ListGroup';
function App() {
	let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
	const handleSelectItem = (item: String) => {
		console.log(item);
	};

	return (
		<div>
			<ListGroup
				// 传入参数
				items={items}
				heading='Cities'
				onSelectItem={handleSelectItem}
			/>
		</div>
	);
}
export default App;
