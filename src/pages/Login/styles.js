import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const LoginBox = styled.div`
	padding: 20px;
	max-width: 370px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, .2);
	text-align: center;
	color: #014877;
	margin: 0px 5px;
	h4 {
		padding-bottom: 10px;
	}
	input {
		width: 100%;
		padding: 10px;
		margin: 10px 0px;
		background: #fff;
		box-shadow: 1px 1px 8px rgba(0, 0, 0, .2);
		border: none;
		font-size: 18px;
	}
	span {
		color: #f55;
		padding: 20px 0px;
	}
`;
export const Button = styled.button`
	width: 100%;
	padding: 10px 0px;
	margin: 15px 0px 0px 0px;
	color: #fff;
	background: #014877;
	font-size: 18px;
	font-weight: bold;
	border: 2px solid #014877;
	text-decoration: none;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, .2);
	&:hover {
		background: #fff;
		font-weight: bold;
		border: 2px solid #014877;
		color: #014877;
	}
`;
