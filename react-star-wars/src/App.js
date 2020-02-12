import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import StarshipDetailsPage from './pages/StarshipDetailsPage/StarshipDetailsPage';
import StarshipsPage from './pages/StarshipsPage/StarshipsPage';
import { getAllStarships } from './services/sw-api';

const App = () => {
	const [{ starships }, setState] = useState({
		starships: []
	});

	useEffect(() => {
		async function fetchData() {
			const data = await getAllStarships();
			setState({
				starships: data.results
			});
		}
		fetchData();
	}, []);

	return (
		<div className="App">
			<h1 className="App-header">STAR WARS STARSHIPS</h1>
			<Switch>
				<Route
					exact
					path="/"
					render={() => <StarshipsPage starships={starships} />}
				/>
				<Route
					exact
					path="/starship"
					render={props => <StarshipDetailsPage {...props} />}
				/>
			</Switch>
		</div>
	);
};

export default App;
