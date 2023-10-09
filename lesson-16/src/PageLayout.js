import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

const PageLayout = (props) => {
	
	return (
		<div>
			<Navigation />
			<Header />
			{props.children}
			<Footer />
		</div>
	);
};

export default PageLayout;
