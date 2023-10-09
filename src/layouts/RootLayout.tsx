import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default RootLayout;
