import React, { Component } from 'react';
//import './styles.css';
import MostViewed from '../../components/MostViewed';
import { Container, SearchContainer, Title, SubTitle, Filters, InputContainer, InputContent } from './styles';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default class Home extends Component {
	state = {
		input: ''
	};
	render() {
		const { input } = this.state;
		return (
			<Container>
				<SearchContainer>
					<Title>Portal do TCC</Title>
					<SubTitle>Universidade Federal do Amapá</SubTitle>
					<InputContainer>
						<InputContent>
							<input
								value={input}
								onChange={(e) => this.setState({ input: e.target.value })}
								type="text"
								placeholder="Faça sua busca"
							/>
							<Link to={`/buscar/${input}`}>Buscar</Link>
						</InputContent>
					</InputContainer>
					<Filters>
						<p>Buscar por: </p>
						<input type="radio" name="tipo" value="Título" /> Título
						<input type="radio" name="tipo" value="Orientador" /> Orientador
						<input type="radio" name="tipo" value="Autor" /> Autor
					</Filters>
				</SearchContainer>
				<div style={{ height: 150, overflow: 'hidden', flex: 1 }}>
					<svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
						<path
							d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
							style={{ stroke: 'none', fill: '#014877' }}
						/>
					</svg>
				</div>
			</Container>
		);
	}
}
