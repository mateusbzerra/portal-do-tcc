import styled from 'styled-components';

export const Container = styled.div`height: 100%;`;

export const SearchContainer = styled.div`
	display: flex;
	height: 77%;
	background: #fff;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.h1`
	color: #014877;
	font-size: 50px;
	text-align: center;
	font-weight: 300;
`;

export const SubTitle = styled.h2`
	color: #014877;
	font-size: 25px;
	text-align: center;
	font-weight: 300;
	padding-bottom: 30px;
`;

export const Filters = styled.div`
	display: flex;
	align-items: center;
	color: #848484;
	font-size: 20px;
	justify-content: flex-start;
	p {
		padding: 30px 5px;
	}
	input {
		margin: 0px 10px;
	}
`;

export const InputContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0px;
	a {
		padding: 16px 30px;
		color: #fff;
		background: #014877;
		font-size: 20px;
		font-weight: bold;
		border: 2px solid #014877;
		text-decoration: none;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, .2);
	}
	input {
		width: 100%;
		padding: 20px 15px;
		background: transparent;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, .2);
		font-size: 20px;
		color: #014877;
		border: none;
		background: #fff;
		font-family: 'Open Sans Condensed', sans-serif;
	}
	input::placeholder {
		color: #848484;
		font-size: 20px;
		font-family: 'Open Sans Condensed', sans-serif;
	}
`;

export const InputContainer = styled.div`
	max-width: 1000px;
	width: 100%;
`;
