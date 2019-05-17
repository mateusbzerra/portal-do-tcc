import React, { Component } from 'react';

import {
	Container,
	Content,
	Filters,
	Results,
	Card,
	ResultsContainer,
	ResultTitle,
	ModalTitle,
	ModalContent,
	ModalDetail
} from './styles';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';
import api from '../../services/api';
import Loading from '../../components/Loading';

export default class Search extends Component {
	state = {
		modal: false,
		papers: [],
		loading: true,
		selected: ''
	};

	async componentDidMount() {
		const { match: { params: { input } } } = this.props;
		//console.log(input);
		const { data } = await api.get(`search/${input}`);
		this.setState({ papers: data, loading: false });
		console.log(data);
	}

	handleModal = async ({ id }) => {
		if (id) {
			this.setState({ loading: true });
			let { data } = await api.get(`paper/${id}`);
			data.course = data.course.name;
			this.setState({ modal: !this.state.modal, selected: data, loading: false });
		} else {
			this.setState({ modal: !this.state.modal });
		}
	};

	render() {
		const { input } = this.props.match.params;
		const { modal, papers, loading, selected } = this.state;
		return (
			<Container>
				{loading && <Loading />}
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
							{papers.map((paper) => (
								<button
									key={paper.id}
									style={{ border: 'none', cursor: 'pointer' }}
									onClick={() => this.handleModal({ id: paper.id })}
								>
									<Card>
										<h1>{paper.title}</h1>
										<p>{paper.description}</p>
										<small>{paper.author}</small>
										<div>
											<small>
												{paper.course.name} - {paper.year}
											</small>
										</div>
									</Card>
								</button>
							))}
						</Results>
					</ResultsContainer>
				</Content>
				{selected != null && (
					<Modal handleClose={this.handleModal} show={modal}>
						<ModalTitle>{selected.title}</ModalTitle>
						<ModalContent>{selected.description}</ModalContent>
						<ModalDetail>
							<b>Autor</b>: {selected.author}
						</ModalDetail>
						<ModalDetail>
							<b>Orientador</b>: {selected.advisor}
						</ModalDetail>
						<ModalDetail>
							<b>Curso</b>: {selected.course}
						</ModalDetail>
						<ModalDetail>
							<b>Ano</b>: {selected.year}
						</ModalDetail>
						<button>Visualizar Arquivo</button>
					</Modal>
				)}
			</Container>
		);
	}
}
