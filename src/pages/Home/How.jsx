import React from "react";
import arrow from "../../assets/arrow-22.png";

const How = ({ heading, subheading, arr }) => {
	return (
		<div className=" bg-secondary-brand text-white px-4 py-8 my-8">
			<h3 className=" font-bold text-2xl md:text-3xl text-center">{heading}</h3>
			<p className="text-center md:text-2xl sm:text-lg text-sm md:my-4 my-2">
				{subheading}
			</p>
			<div className=" flex lg:h-[400px] lg:flex-row flex-col gap-4 lg:gap-0 mt-4">
				{arr.map((each, i) => (
					<div
						className={`${i == 0 && "self-start"} ${i == 1 && "self-center"} ${
							i == 2 && "self-end"
						}`}
						key={i}
					>
						<div className={`flex items-start gap-1 justify-start`}>
							{each.vector && (
								<img
									src={arrow}
									alt="/"
									className=" relative top-[90px] hidden lg:inline-block"
								/>
							)}
							<div>
								<div className=" bg-[#3EB772] shadow-special w-[52px] h-[52px] md:w-[65px] md:h-[65px] flex justify-center items-center rounded-full">
									{each.image}
								</div>
								<h5 className=" font-bold md:text-2xl text-xl my-4">
									{each.title}
								</h5>
								<p className=" md:text-base text-sm">{each.text}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default How;
