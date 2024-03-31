import React from "react";

const ForExpert = () => {
	return (
		<div className="bg-primary-brand">
			<div className="w-[90%] mx-auto">
				{/*---- landing page background and content section-----*/}

				<div className=" bg-mb-landing-page lg:bg-landing-page bg-no-repeat bg-center bg-cover   lg:h-[33.7rem] rounded-xl flex ">
					<div className="text-left w-[39rem] m-6 text-white content-start">
						{/*---- For beauty text and styles-----*/}

						<h4 className=" my-4 text-sm sm:text-lg lg:my-9 lg:text-2xl font-semibold">
							For Beauty Experts
						</h4>

						{/*---- For expert bold text-----*/}

						<h3 className="text-xl w-[14rem] mb-4 font-semibold sm:text-2xl sm:w-[28rem] lg:w-[40rem] lg:text-4xl lg:font-bold lg:mb-8">
							Empower your artistry, showcase your business
						</h3>

						{/*---- paragraph-----*/}

						<p className=" text-sm w-[14rem] mb-3 sm:text-1xl lg:text-2xl  sm:w-[25rem] lg:w-[32rem] lg:mb-8">
							Showcase your talent, manage appointments effortlessly, and
							connect with clients who crave your expertise.
						</p>

						{/*---- button-----*/}

						<button
							className={
								" bg-white text-tertiary-brand border-tertiary-brand  font-medium me- 2 py-1 px-3 rounded-full lg:font-semibold lg:me-3 lg:py-2 lg:px-5"
							}
						>
							Register
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForExpert;
