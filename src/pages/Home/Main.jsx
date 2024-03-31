import React from "react";
import Hero from "./Hero";
import ForExpert from "./ForExpert";
import SmallBusiness from "./SmallBusiness";

const Main = () => {
	return (
		<div className="bg-primary-brand">
			<div className="w-[90%] mx-auto">
				<Hero />
				<ForExpert />
				<SmallBusiness />
			</div>
		</div>
	);
};

export default Main;
