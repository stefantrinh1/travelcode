import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../components/Pages/Homepage';
import About from '../components/Pages/About';
import NotFound from '../components/Pages/NotFound.js';
import Layout from '../components/Layout/Layout';

const AppRouter = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route style={{ maxHeight: '-webkit-fill-available' }} exact={true} path="/" component={Homepage} />
					<Route path="/about" component={About} />
					{/* <Route path="/blog" component={BlogRouter} />     */}
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</Router>
	);
};

export default AppRouter;
