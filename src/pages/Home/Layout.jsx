import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Layout = () => {
	return (
		<div className="bg-primary-brand ">
			<div className="">
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
