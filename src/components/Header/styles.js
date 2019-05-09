import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	background-color: #fff;
	box-shadow: 0 2px 10px -2px rgba(0, 0, 0, .2);
	padding: 10px 20px;
	align-items: center;
`;
export const Logo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-right: 20px;
`;
export const Title = styled.h1`
	color: #014877;
	font-weight: 300;
	font-size: 35px;
`;
export const SubTitle = styled.h2`
	color: #014877;
	font-weight: 300;
	font-size: 15px;
`;

export const Nav = styled.ul`
	list-style: none;
	li {
		display: inline-block;
		padding: 0px 10px;
		a {
			color: #014877;
			text-decoration: none;
			font-size: 20px;
			font-weight: 500;
			padding: 0px 10px 5px 10px;
		}
		a:hover {
			border-bottom: 1px solid #014877;
		}
	}
`;
