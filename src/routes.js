import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './pages/Home';
import Search from './pages/Search';
import Paper from './pages/Paper';
import Login from './pages/Login';
import StoreTcc from './pages/StoreTcc';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/buscar/:input" component={Search} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/tcc/cadastro" component={StoreTcc} />
		</Switch>
	</BrowserRouter>
);
export default Routes;
