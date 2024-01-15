import React from 'react';
import { useState } from 'react';
import Table from './Table';

function SortableTable(props) {
	const [sortOrder, setSortOder] = useState(null);
	const [sortBy, setSortby] = useState(null);
	const { config } = props;

	const handleClick = (label) => {
		if (sortOrder === null) {
			setSortOder('asc');
			setSortby(label);
		} else if (sortOrder === 'asc') {
			setSortOder('desc');
			setSortby(label);
		} else if (sortOrder === 'desc') {
			setSortOder(null);
			setSortby(null);
		}
	};

	const updatedConfig = config.map((column) => {
		if (!column.sortValue) {
			return column;
		}

		return {
			...column,
			header: () => (
				<th key={column.label} onClick={() => handleClick(column.label)}>
					{column.label} IS SORTABLE
				</th>
			),
		};
	});

	return (
		<div>
			{sortOrder} - {sortBy}
			<Table {...props} config={updatedConfig} />
		</div>
	);
}

export default SortableTable;
