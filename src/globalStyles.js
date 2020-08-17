import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${({ theme }) => css`
	body {
		background-color: ${() => theme.background};
		color: ${() => theme.text};
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0 0 1rem 0;
		text-transform: capitalize;
	}

	button {
		border: solid 2px ${() => theme.text};
		background: none;
		padding: 0.5rem 1rem;
		font-weight: bold;
		text-transform: uppercase;
		color: ${() => theme.text};
	}
`}
`;

export const themeDark = {
	background: '#272727',
	text: '#fdfdfd',
	primary: `rgb(0, 86, 125)`,
	secondary: `rgb(202, 54, 37)`,
	tertiary: `rgb(202, 54, 37)`,
	dark: `black`,
	light: `white`,
};

export const themeLight = {
	background: '#fdfdfd',
	text: '#272727',
	primary: `rgb(0, 86, 125)`,
	secondary: `rgb(202, 54, 37)`,
	tertiary: `rgb(202, 54, 37)`,
	dark: `black`,
	light: `white`,
};
