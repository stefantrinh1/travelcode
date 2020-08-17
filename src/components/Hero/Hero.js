import React from 'react';
import styled from 'styled-components';
import HeroImage from '../../assets/images/hero.jpg';
export default function Hero() {
	return (
		<Wrapper>
			<Image src={HeroImage} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	background-color: ${(props) => props.theme.background};
	color: ${(props) => props.theme.text};
	height: 100vh;
	width: 100%;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	position: absolute;
	object-fit: cover;
`;
