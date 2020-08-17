import React from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import NavMenu from './NavMenu';

export default function Navigation() {
	return (
		<Nav>
			<Hamburger />
			<NavMenu />
		</Nav>
	);
}

const Nav = styled.nav`
	display: flex;
	width: 100%;
	background: blue;
`;
