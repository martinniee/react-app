import { Fragment, MouseEvent } from 'react';

function ListGroup() {
	let citiesItems = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
	// citiesItems = [];
	const handlerClick = (event: MouseEvent) => {
		console.log(event);
	};
	return (
		<Fragment>
			<h1>List Group</h1>
			{citiesItems.length === 0 && <p>No item found</p>}
			<ul className='list-group'>
				{citiesItems.map((item) => (
					<li
						className='list-group-item'
						key={item}
						onClick={handlerClick}
					>
						{item}
					</li>
				))}
			</ul>
		</Fragment>
	);
}
export default ListGroup;
