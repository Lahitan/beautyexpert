import React from "react";
import { Link } from "react-router-dom";

const LoginRoot = () => {
	return (

		<div className=" flex flex-row min-h-screen justify-center items-center">

			{/* ------Sign-up box------ */}

			<div className="w-[80rem] h-[41rem] bg-primary-brand flex flex-col text-center gap-y-[5rem]" >

				<div className="mt-7">

					<h4 >WHAT WOULD YOU LIKE TO DO ON BEAUTY XPATS?</h4>

				</div>

				<div className="flex justify-between  px-6 py-8">
					{/* ----first: List your business------*/}

					<div className="mt-36 ">

						<h3 className=" text-tertiary-brand text-2xl font-bold mb-8 ">List your small/medium beauty business?</h3>
						<p className="mb-8 w-[34rem]">Connect with a growing network of beauty clients seeking your talents. 
							Easily manage your profile, services, and appointments.</p>

								<Link
									
									className={" bg-tertiary-brand rounded-full p-2 m-10 text-white"}
										>
											List your business
								</Link>

					</div>

					<div className="w-[0.16rem] h-[29rem] bg-divider rounded-lg"></div>

						{/* ----second: Hire an expert------*/}

					<div  className="mt-36 ">

						<h3 className=" text-tertiary-brand text-2xl font-bold mb-8">Hire a beauty expert?</h3>
						<p className="mb-8 w-[34rem]">Find the perfect expert for your needs with convenient search and booking tools. 
							Enjoy a seamless and stress-free beauty experience.</p>

						
							<Link
									to={"/customerCreateAccount"}
									className={" bg-tertiary-brand rounded-full p-2 m-10 text-white"}
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
