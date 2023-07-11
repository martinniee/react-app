import { Fragment } from 'react';

function ListGroup() {
	let citiesItems = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
	// citiesItems = [];
	return (
		<Fragment>
			<h1>List Group</h1>
			{/* {citiesItems.length === 0 ? <p>No item found</p> : null} */}
			{citiesItems.length === 0 && <p>No item found</p>}
			<ul className='list-group'>
				{citiesItems.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</Fragment>
	);
}
export default ListGroup;
