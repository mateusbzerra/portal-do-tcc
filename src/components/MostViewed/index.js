import React from 'react';

import { Container, Title, MostViewedContainer, Content } from './styles';

const MostViewed = () => (
	<Container>
		<Title>Mais Visualizados</Title>
		<MostViewedContainer>
			<Content>
				<h4>Título do TCC do aluno fulano de tal</h4>
				<p>Autor: Mateus Bezerra da Silva</p>
				<p>Curso: Ciência da Computação</p>
				<p>Ano: 2019</p>
			</Content>
			<Content>
				<h4>Título do TCC do aluno fulano de tal</h4>
				<p>Autor: Mateus Bezerra da Silva</p>
				<p>Curso: Ciência da Computação</p>
				<p>Ano: 2019</p>
			</Content>
			<Content>
				<h4>Título do TCC do aluno fulano de tal</h4>
				<p>Autor: Mateus Bezerra da Silva</p>
				<p>Curso: Ciência da Computação</p>
				<p>Ano: 2019</p>
			</Content>
		</MostViewedContainer>
	</Container>
);

export default MostViewed;
