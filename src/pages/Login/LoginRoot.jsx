import React from "react";
import { Link } from "react-router-dom";

const LoginRoot = () => {
	return (
		<div className=" flex flex-row min-h-screen justify-center items-center  bg-primary-brand">
			{/* ------Sign-up box------ */}

			<div className=" w-[20.5rem] lg:w-[80rem] lg:h-[41rem] flex  flex-col text-center lg:gap-y-[5rem] text-black">
				<div className="lg:mt-7">
					<h4>WHAT WOULD YOU LIKE TO DO ON BEAUTY XPATS?</h4>
				</div>

				<div className=" flex-col lg:flex-row flex justify-between  lg:px-6 lg:py-8">
					{/* ----first: List your business------*/}

					<div className="lg:mt-36 border-2 border-green-600 rounded-md p-4 mt-5 lg:border-0">
						<h3 className=" text-tertiary-brand text-2xl font-bold mb-8 ">
							List your small/medium beauty business?
						</h3>
						<p className="lg:mb-8 lg:w-[34rem] w-20.5rem mb-4">
							Connect with a growing network of beauty clients seeking your
							talents. Easily manage your profile, services, and appointments.
						</p>

						<Link
							to={"/ExpertCreateAccount"}
							className={" bg-tertiary-brand rounded-full p-2 px-8 m-10 text-white mt-4"}
						>
							List your business
						</Link>
					</div>

						{/* ----Divider------*/}

					<div className="w-[0.16rem] h-[29rem] bg-divider rounded-lg hidden lg:block"></div>

					{/* ----second: Hire an expert------*/}

					<div className="lg:mt-36 border-2 border-green-600 rounded-md p-4 mt-8 lg:border-0">
						<h3 className=" text-tertiary-brand text-2xl font-bold mb-8">
							Hire a beauty expert?
						</h3>
						<p className="lg:mb-8 lg:w-[34rem] w-20.5rem mb-4">
							Find the perfect expert for your needs with convenient search and
							booking tools. Enjoy a seamless and stress-free beauty experience.
						</p>

						<Link
							to={"/customerCreateAccount"}
							className={" bg-tertiary-brand rounded-full p-2 px-8 m-10 text-white"}
						>
							Hire an expert
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginRoot;
