import { Fragment } from 'react';

function ListGroup() {
	const citiesItems = [
		'New York',
		'San Francisco',
		'Tokyo',
		'London',
		'Paris',
	];
	return (
		<Fragment>
			<h1>List Group</h1>
			<ul className='list-group'>
				{citiesItems.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</Fragment>
	);
}
export default ListGroup;
