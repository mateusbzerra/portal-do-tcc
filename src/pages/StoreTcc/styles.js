import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Content = styled.form`
	padding: 20px;
	max-width: 1200px;
	width: 100%;
	margin: 20px auto;
	background: #fff;
	border: none;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, .3);
	h2 {
		color: #014877;
		text-align: center;
		padding-bottom: 10px;
	}
	p {
		width: 100%;
		font-size: 16px;
		padding: 10px 5px 0px 0px;
		font-weight: bold;
	}
	input,
	textarea {
		width: 100%;
		padding: 10px;
		margin: 5px 0px;
		background: #fff;
		box-shadow: 1px 1px 8px rgba(0, 0, 0, .2);
		border: none;
		font-size: 18px;
	}
	select {
		width: 100%;
		height: 50px;
		margin: 5px 0px;
		border: none;
		font-size: 18px;
		box-shadow: 1px 1px 8px rgba(0, 0, 0, .2);
		background: #fff;
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
export const FileArea = styled.button`
	height: 80px;
	margin: 20px 0px;
	width: 100%;
	background: #fff;
	border: 4px dashed #aaa;
	font-size: 20px;
	color: #aaa;
	font-weight: bold;
`;
