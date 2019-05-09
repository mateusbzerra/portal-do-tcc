import React, { Component } from 'react';

import { Container, Title, SubTitle, Logo, Nav } from './styles';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<Container>
				<Logo>
					<Title>Portal do TCC</Title>
					<SubTitle>Universidade Federal do Amapá</SubTitle>
				</Logo>
				<Nav>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<a href="">Teste</a>
					</li>
					<li>
						<a href="">Admin</a>
					</li>
				</Nav>
			</Container>
		);
	}
}
