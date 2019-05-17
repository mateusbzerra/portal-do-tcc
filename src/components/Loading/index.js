import React from 'react';
import { Container, Content } from './styles';

const Loading = () => {
	return (
		<Container>
			<Content>
				<img src="http://www.grandesmestresmarciais.com.br/img/loading.gif" alt="loading" />
				<h4>Carregando...</h4>
			</Content>
		</Container>
	);
};
export default Loading;
