import React from "react";
import hero from "../../assets/hero.png";

const Hero = () => {
	return (
		<div className="hero-container flex p-8 my-9">
			<div className="hero-text text-left content-center ">
				<h2 className="text-6xl font-extrabold w-2/3 mb-4">
					Where beauty meets convenience
				</h2>
				<p className="text-xl w-[33.87rem] font-openSans p-4 font-medium">
					Slay wahala-free! Book your next beauty appointment seamlessly on
					Beauty Xpats.
				</p>
				<button
					className={
						" bg-tertiary-brand text-white font-semibold me-3 rounded-full py-2 px-5"
					}
				>
					Get started
				</button>
			</div>

			<div className="hero-image">
				<img src={hero} alt="" />
			</div>
		</div>
	);
};

export default Hero;
