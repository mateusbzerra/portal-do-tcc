import React, { Component } from 'react';

import { Container, Content, Filters, Results, Card, ResultsContainer, ResultTitle } from './styles';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

export default class Search extends Component {
	render() {
		const { input } = this.props.match.params;
		console.log(input);
		return (
			<Container>
				<Header />
				<Content>
					<Filters>
						<p>Filtros de Busca</p>
						<ul>
							<li>filtro</li>
							<li>filtro</li>
							<li>filtro</li>
							<li>filtro</li>
						</ul>
					</Filters>
					<ResultsContainer>
						<ResultTitle>Resultados para: {input}</ResultTitle>
						<Results>
							<Link to="/">
								<Card>
									<h1>Título do TCC</h1>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam
										similique voluptates dignissimos, earum odit, alias aliquam tempore expedita
										libero itaque officiis quidem accusantium. Ullam natus laudantium beatae commodi
									</p>
									<small>Fulano Ciclano de Tal</small>
									<div>
										<small>Ciência da Computação - 2019</small>
									</div>
								</Card>
							</Link>
						</Results>
					</ResultsContainer>
				</Content>
			</Container>
		);
	}
}
