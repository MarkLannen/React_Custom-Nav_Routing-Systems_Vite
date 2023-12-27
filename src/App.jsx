import { useState } from 'react';
import Dropdown from './assets/components/Dropdown';

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  return (
    <Dropdown value={selection} onChange={handleSelect} options={options} />
  );
}

export default App;
