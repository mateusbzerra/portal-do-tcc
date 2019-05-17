import React, { Component } from 'react';
import { Container, Content, Button, FileArea } from './styles';
import { withFormik } from 'formik';
import Header from '../../components/Header';
import api from '../../services/api';

class StoreTcc extends Component {
	state = {
		loading: false,
		paper_id: 6,
		courses: [],
		file: null
	};
	async componentDidMount() {
		const { data } = await api.get('course');
		this.setState({ courses: data });
	}
	fileSelected = (e) => {
		this.setState({ file: e.target.files[0] });
	};
	sendFile = async () => {
		const { file, paper_id } = this.state;
		const fd = new FormData();
		fd.append('file', file);
		fd.append('paper_id', paper_id);
		const request = await api.post('file', fd);
		console.log(request);
	};
	render() {
		const { handleChange, values, handleSubmit } = this.props;
		const { courses, paper_id, file } = this.state;
		return (
			<Container>
				<Header />
				{paper_id === null ? (
					<Content>
						<h2>Cadastrar Trabalho</h2>
						<p>Título</p>
						<input
							name="title"
							value={values.title}
							onChange={handleChange}
							placeholder="Título do trabalho"
							type="text"
						/>

						<p>Descrição</p>
						<textarea
							name="description"
							value={values.description}
							onChange={handleChange}
							placeholder="Descrição do trabalho"
							type="text"
						/>

						<p>Autor</p>
						<input
							name="author"
							value={values.author}
							onChange={handleChange}
							placeholder="Autor do trabalho"
							type="text"
						/>

						<p>Orientador</p>
						<input
							name="advisor"
							value={values.advisor}
							onChange={handleChange}
							placeholder="Autor do trabalho"
							type="text"
						/>

						<p>Ano</p>
						<input
							name="year"
							value={values.year}
							onChange={handleChange}
							placeholder="Autor do trabalho"
							type="number"
						/>
						<p>Curso</p>
						<select value={values.course_id} onChange={handleChange} name="course_id" id="">
							<option value="">Selecione um curso</option>
							{courses.map((course) => (
								<option key={course.id} value={course.id}>
									{course.name}
								</option>
							))}
						</select>
						<Button type="button" onClick={handleSubmit}>
							Próxima Etapa
						</Button>
					</Content>
				) : (
					<Content>
						<h2>Agora vamos enviar o arquivo do trabalho :)</h2>
						<input
							onChange={this.fileSelected}
							ref={(e) => (this.inputFile = e)}
							hidden
							accept=".pdf"
							type="file"
							name="file"
						/>
						<FileArea type="button" onClick={() => this.inputFile.click()}>
							{file ? file.name : 'Selecionar Arquivo'}
						</FileArea>
						{file && (
							<Button type="button" onClick={this.sendFile}>
								Finalizar Cadastro
							</Button>
						)}
					</Content>
				)}
			</Container>
		);
	}
}
export default withFormik({
	mapPropsToValues: () => ({
		title: '',
		description: '',
		author: '',
		advisor: '',
		year: '',
		course_id: ''
	}),
	handleSubmit: async (values) => {
		console.log(values);
		try {
			const request = await api.post('paper', values);
			console.log(request.id);
		} catch (err) {
			console.log(err);
		}
	}
})(StoreTcc);
