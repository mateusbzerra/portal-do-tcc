import React, { Component } from 'react';
import Header from '../../components/Header';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';

import { Container, Content, LoginBox, Button } from './styles';

class Login extends Component {
	login = () => {};
	render() {
		const { handleSubmit, values, handleChange, errors } = this.props;
		return (
			<Container>
				<LoginBox>
					<h2>Acesso ao sistema</h2>
					<h4>Portal do TCC</h4>
					<input
						name="email"
						value={values.email}
						onChange={handleChange}
						type="text"
						placeholder="fulano@email.com"
					/>
					{!!errors.email && <span>{errors.email}</span>}
					<input
						name="password"
						value={values.password}
						onChange={handleChange}
						type="password"
						placeholder="*********"
					/>
					{!!errors.password && <span>{errors.password}</span>}
					<Button type="button" onClick={handleSubmit}>
						Entrar
					</Button>
				</LoginBox>
			</Container>
		);
	}
}
export default withFormik({
	mapPropsToValues: () => ({
		email: '',
		password: ''
	}),

	validateOnChange: false,
	validateOnBlur: true,

	validationSchema: Yup.object().shape({
		email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
		password: Yup.string().required('Campo Obrigatório').min(3, 'A senha deve ter no mínimo 8 caracteres')
	}),
	handleSubmit: async (values) => {
		const { data } = await api.post('login', values);
		console.log(data);
	}
})(Login);
