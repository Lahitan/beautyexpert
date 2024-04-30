import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import eye from "../../assets/eye-logo.png";

const Login = () => {
	return (
		<div className="bg-primary-brand flex flex-col min-h-screen justify-center items-center">
			<div className=" w-[22.5rem] lg:w-[35.18rem] ">
				<div>
					<h2 className="lg:text-xl font-bold text-center mb-1">
						Log into Beauty Xpats
					</h2>
				</div>

				<div className="text-center mb-8">
					<span>Don’t have an account?</span>
					<span className=" font-semibold">
						<Link> Sign up</Link>
					</span>
				</div>

				<div>
					<label className="input input-bordered flex items-center gap-9 bg-primary-brand mb-[1rem]">
						<input
							type="text"
							className="grow"
							placeholder="Enter your email address"
						/>
					</label>

					<label className="input input-bordered flex items-center gap-9 bg-primary-brand mb-[1rem]">
						<input type="text" className="grow" placeholder="Password" />
						<img src={eye} alt="" />
					</label>
					<div className="flex justify-end mb-4 font-semibold  w-[22.5rem] lg:w-[35.18rem]">
						<Link to={"/forgetPassword"}> Forgot password</Link>
					</div>

					<div className=" card-actions justify-center">
						<Link to={"/CustomerHomepage"}>
							<button className="btn btn-circle btn-sm px-24 btn-neutral w-[3rem]">
								Login
							</button>
						</Link>
					</div>
					<div className=" my-4">
						<span>Remember me</span>
					</div>
				</div>
				<div>
					<div className="flex flex-col w-full border-opacity-50">
						<div className="divider">or log in with</div>
					</div>

					<div className="flex justify-center gap-4 my-4">
						<img src={google} alt="" />
						<img src={apple} alt="" />
						<img src={facebook} alt="" />
					</div>
				</div>
			</div>
			<div className=" hidden lg:block lg:mt-8">
				<p className=" text-xs p-2 text-center lg:text-base ">
					<span className="text-accent">
						By logging in, it means you agree to our
					</span>{" "}
					Privacy Policy<span className="text-accent"> and </span>Terms of
					Service
				</p>
			</div>
			<Link to={"/CustomerDashboard"}>click here</Link>
		</div>
	);
};

export default Login;
