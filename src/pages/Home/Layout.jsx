import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ForExpert from "./ForExpert";

const Layout = () => {
	return (
		<div className="bg-primary-brand ">
			<div className="">
				<Header />
				<Main />
				<ForExpert/>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
