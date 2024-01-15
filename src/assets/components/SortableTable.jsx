import React from 'react';
import { useState } from 'react';
import Table from './Table';

function SortableTable(props) {
	const [sortOrder, setSortOder] = useState(null);
	const [sortBy, setSortby] = useState(null);
	const { config, data } = props;

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
					{getIcons(column.label, sortBy, sortOrder)}
					{column.label}
				</th>
			),
		};
	});

	let sortedData = data;
	if (sortOrder && sortBy) {
		const { sortValue } = config.find((column) => column.label === sortBy);
		sortedData = [...data].sort((a, b) => {
			const valueA = sortValue(a);
			const valueB = sortValue(b);

			const reverseOrder = sortOrder === 'asc' ? 1 : -1;

			if (typeof valueA === 'string') {
				return valueA.localeCompare(valueB) * reverseOrder;
			} else {
				return (valueA - valueB) * reverseOrder;
			}
		});
	}

	return (
		<div>
			{sortOrder} - {sortBy}
			<Table {...props} data={sortedData} config={updatedConfig} />
		</div>
	);
}

const getIcons = (label, sortBy, sortOrder) => {
	if (label !== sortBy) {
		return 'Show both icons ';
	}

	if (sortOrder === null) {
		return 'Show both icons ';
	} else if (sortOrder === 'asc') {
		return 'show up icon ';
	} else if (sortOrder === 'desc') {
		return 'show down icon ';
	}
};

export default SortableTable;
