import React from "react";
import Hero from "./Hero";
import ForExpert from "./ForExpert";
import Testimonials from "../../testimonials/Testimonials";
import SmallBusiness from "./SmallBusiness";
import How from "./How";
import { howItWorksArr, howToGetStartedArr } from "../../data/data";
import Ratings from "./Ratings";

const Main = () => {
	return (
		<div className="bg-primary-brand">
			<div className="w-[90%] mx-auto">
				<Hero />
				<ForExpert
					h5={"For Beauty Experts"}
					h3={"Empower your artistry, showcase your "}
					highlighted={"business"}
					p={`Showcase your talent, manage appointments effortlessly, and connect
						with clients who crave your expertise.`}
					button={"Create account"}
					smBackground={"bg-mb-landing-page"}
					lgBackground={"lg:bg-landing-page"}
				/>
				<SmallBusiness />
				<How
					heading={"Let's see how it works"}
					subheading={
						"Let's explore how listing your businesses on the Beauty Xpats website works"
					}
					arr={howItWorksArr}
				/>
				<Ratings />
				<ForExpert
					h5={"For Clients"}
					h3={"Discover vetted "}
					highlighted={"talented"}
					h3Contd={" professionals ready to make you slay."}
					p={`Browse by service, location, and expertise to find the ideal expert. Book appointments, and enjoy a seamless beauty experience – all in one place!`}
					button={"Register"}
					smBackground={"bg-customers-sm"}
					lgBackground={"lg:bg-customers-lg"}
				/>
				<How
					heading={"How to get started"}
					subheading={
						"Let’s explore how finding a beauty professional on Beauty Xpats website works"
					}
					arr={howToGetStartedArr}
				/>
				{/* testimonials  */}
				<Testimonials />
			</div>
		</div>
	);
};

export default Main;
