import React from 'react';
import styled from 'styled-components';
import Slider from "../General/Slider"
export default function ShowcaseContentBlock({
	title,
	subtitle,
	text,
	image,
	ctaName,
	ctaLink,
    images,
	...props
}) {
	return (
		<Container {...props}>
			<Content>
				<Title>{title}</Title>
				<Subtitle>{subtitle}</Subtitle>
				<Text>{text}</Text>
			</Content>
            <Slider images={images}/>
			<Image src={image} alt={title} />
			<Button>
				<a href={ctaLink}>{ctaName}</a>
			</Button>
		</Container>
	);
}

ShowcaseContentBlock.defaultProps = {
	title: 'Title',
	subtitle: 'Subtitle',
	text:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	image: 'https://via.placeholder.com/150',
	ctaName: 'Explore With Us',
	ctaLink: 'https://www.instagram.com',
};

const Container = styled.section`
	font-size: 1rem;display: flex;flex-direction:column;

	@media (min-width: 767px) {
		display: flex;
	}
`;
const Image = styled.img`
	width: 100%;
	object-fit: cover;

	@media (min-width: 767px) {
		display: flex;
		width: 50%;
	}
`;

const Content = styled.div`
	flex-direction: column;
	display: flex;
	justify-content: center;
	@media (min-width: 767px) {
		width: 50%;
		padding: 2rem;
	}
`;

const Subtitle = styled.h3`
	font-weight: 500;
	font-size: 1.25em;
	margin-bottom: 0;
`;
const Title = styled.h2`
	font-size: 2em;
	margin-top: 0.25rem;
`;
const Text = styled.p``;
const Button = styled.button``;

/*  

* Title
* Subtitle
* Text
* Image
* CTA Name
* CTA Link


*/
