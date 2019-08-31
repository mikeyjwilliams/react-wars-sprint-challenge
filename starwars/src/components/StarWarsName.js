import React from 'react';
import { CardTitle } from 'reactstrap';

export function StarWarsName(props) {
	const { name } = props;

	return (
		<CardTitle>
			<h1>{name}</h1>
		</CardTitle>
	);
}
