import React from 'react';
import Route from './assets/components/Route';
import Sidebar from './assets/components/Sidebar';
import AccordionPage from './assets/pages/AccordionPage';
import DropdownPage from './assets/pages/DropdownPage';
import ButtonPage from './assets/pages/ButtonPage';
import ModalPage from './assets/pages/ModalPage';
import TablePage from './assets/pages/TablePage';

function App() {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <Sidebar />
      <div className='col-span-5'>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/'>
          <DropdownPage />
        </Route>
        <Route path='/buttons'>
          <ButtonPage />
        </Route>
        <Route path='/modal'>
          <ModalPage />
        </Route>
        <Route path='/table'>
          <TablePage />
        </Route>
      </div>
    </div>
  );
}

export default App;
