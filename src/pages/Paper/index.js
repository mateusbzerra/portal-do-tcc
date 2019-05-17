import React, { Component } from 'react';

import { Container, Content } from './styles';
import Header from '../../components/Header';

export default class Paper extends Component {
	render() {
		return (
			<Container>
				<Header />
				<Content>
					<h1>Título da Obra</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur aliquid vel aliquam ad vero
						obcaecati praesentium sit animi eligendi magnam laborum autem nemo officiis ipsa iure voluptate
						molestias, pariatur dolores!
					</p>
				</Content>
			</Container>
		);
	}
}
