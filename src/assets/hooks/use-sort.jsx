import { useState } from 'react';

const useSort = (data, config) => {
  const [sortOrder, setSortOder] = useState(null);
  const [sortBy, setSortby] = useState(null);

  const setSortColumn = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOder('asc');
      setSortby(label);
      return;
    }

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
  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn,
  };
};

export default useSort;
