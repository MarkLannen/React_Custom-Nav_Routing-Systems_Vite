import { createContext } from 'react';

const navigationContext = createContext();

const NavigationProvider = (children) => {
	return (
		<NavigationContext.Provider value={{}}>
			{children}
		</NavigationContext.Provider>
	);
};

export { NavigationProvider };
export default navigationContext;
