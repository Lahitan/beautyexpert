import React from "react";
import hero from "../../assets/hero.png";

const Hero = () => {
	return (
		<div className="hero-container flex p-3 my-6 lg:p-8 lg:my-9">
			<div className="hero-text lg:text-left content-center ">

				{/*---- Hero text-----*/}

				<h2 className=" w-[18rem] text-3xl font-semibold mb-1 sm:w-[20rem] sm:text-4xl lg:text-5xl lg:w-2/3 lg:mb-4 lg:font-extrabold">
					Where beauty meets convenience
				</h2>
				<p className=" text-base w-[18rem] p-1 mb-1 lg:text-xl lg:w-[33.87rem] font-openSans lg:p-4 font-medium">
					Slay wahala-free! Book your next beauty appointment seamlessly on
					Beauty Xpats.
				</p>

				{/*----Hero button-----*/}

				<button 
					className={
						" bg-tertiary-brand text-white font-semibold me-3 rounded-full py-2 px-5 mt-4"
					}
				>
					Get started
				</button>
			</div>

					{/*---- Hero image-----*/}

			<div className="hero-image hidden sm:block sm:w-[20rem] lg:w-[30rem] lg:block" >
				<img src={hero} alt="" />
			</div>
		</div>
	);
};

export default Hero;
