import React from "react";
import Hero from "./Hero";
import ForExpert from "./ForExpert";

const Main = () => {
	return (
		<div className="bg-primary-brand">
			<div className="w-[90%] mx-auto">
				<Hero />
				<ForExpert />
			</div>
		</div>
	);
};

export default Main;
