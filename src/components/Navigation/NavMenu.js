import React from 'react';
import { NavLink, Router } from 'react-router-dom';
import styled from 'styled-components';

export default function NavMenu() {
	return (
		<Container>
			{/* <Router> */}
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			{/* </Router> */}
		</Container>
	);
}

const Container = styled.ul``;
