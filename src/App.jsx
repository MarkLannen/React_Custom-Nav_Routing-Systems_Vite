import React from 'react';
import Route from './assets/components/Route';
import Sidebar from './assets/components/Sidebar';
import AccordionPage from './assets/pages/AccordionPage';
import DropdownPage from './assets/pages/DropdownPage';
import ButtonPage from './assets/pages/ButtonPage';

function App() {
	return (
		<div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
			<Sidebar />
			<div className="col-span-5">
				<Route path="/accordion">
					<AccordionPage />
				</Route>
				<Route path="/">
					<DropdownPage />
				</Route>
				<Route path="/buttons">
					<ButtonPage />
				</Route>
			</div>
		</div>
	);
}

export default App;
