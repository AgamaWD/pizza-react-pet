import React from 'react';
import { Routes, Route } from "react-router";
import './scss/app.scss';

import Home from './pages/Home';
import Cart from './pages/Cart'
import NotFound from './pages/NotFound';
import Header from './components/header'

export const SearchContext = React.createContext('')

function App() {
	
	const [searchValue, setSearchValue] = React.useState('')

	return (
		<div className="wrapper">

			<SearchContext.Provider value={{searchValue, setSearchValue}}>
				<Header />
				<div className="content">
					<div className="container">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="cart" element={<Cart />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</SearchContext.Provider>

			
		</div>
	);
}

export default App;
