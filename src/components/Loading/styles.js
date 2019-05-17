import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
`;

export const Content = styled.div`
	position: fixed;
	background: #fff;
	height: auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 10px;
	text-align: center;
	img {
		width: 100%;
	}
	h4 {
		font-size: 20px;
		color: #848484;
	}
`;
