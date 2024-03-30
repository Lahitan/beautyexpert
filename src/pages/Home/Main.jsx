import React from "react";
import Hero from "./Hero";
import ForExpert from "./ForExpert";
import Testimonials from "../../testimonials/Testimonials";

const Main = () => {
	return (
		<div className="bg-primary-brand">
			<div className="w-[90%] mx-auto">
				<Hero />
				<ForExpert />
				{/* testimonials  */}
				<Testimonials />
			</div>
		</div>
	);
};

export default Main;
