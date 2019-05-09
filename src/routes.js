import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './pages/Home';
import Search from './pages/Search';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/buscar/:input" component={Search} />
		</Switch>
	</BrowserRouter>
);
export default Routes;
