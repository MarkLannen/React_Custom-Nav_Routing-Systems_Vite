import React from 'react';
import Link from './assets/components/Link';
import Route from './assets/components/Route';
import AccordionPage from './assets/pages/AccordionPage';
import DropdownPage from './assets/pages/DropdownPage';

function App() {
  return (
    <div>
      <Link to='/accordion'>Go to accordion</Link>
      <Link to='/dropdown'>Go to dropdown</Link>
      <div>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='dropdown'>
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
