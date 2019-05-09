import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

export const Content = styled.div`
	display: flex;
	flex: 1;
	padding-top: 20px;
	margin: 0px 10px;
`;
export const Filters = styled.aside`
	padding: 20px;
	border: 1px solid #ddd;
	height: 100%;
	max-width: 300px;
`;
export const Results = styled.section`
	display: flex;
	flex: 1;
	flex-wrap: wrap;
	a {
		text-decoration: none;
		color: #000;
	}
`;
export const ResultsContainer = styled.section`
	display: flex;
	flex: 1;
	flex-direction: column;
	padding-left: 50px;
`;
export const Card = styled.div`
	width: 250px;
	padding: 20px;
	margin: 10px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, .2);
	text-align: center;
	p {
		font-size: 15px;
		color: #9e9e9e;
		padding: 5px 0px;
		line-height: 1.5;
	}
	small {
		font-size: 16px;
		color: #000;
	}
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		small {
			border: 1px solid #014877;
			color: #014877;
			padding: 3px;
			font-size: 15px;
			margin: 5px 0px;
		}
	}
`;

export const ResultTitle = styled.h2`
	font-size: 20px;
	font-weight: 300;
`;
