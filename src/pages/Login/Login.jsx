import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";

const Login = () => {
	return (
		<div className="bg-primary-brand h-screen">
			<div>
				<div>
					<h2>Log into Beauty Xpats</h2>
				</div>

				<div>
					<span>Don’t have an account?</span><Link>Sign up</Link>
				</div>

				<div>
					<label className="input input-bordered flex items-center gap-9 bg-primary-brand mb-[1rem]">
					<input type="text" className="grow" placeholder="Enter your email address" />
					</label>

					<label className="input input-bordered flex items-center gap-9 bg-primary-brand mb-[1rem]">
					<input type="text" className="grow" placeholder="Password" />
					</label>

					<Link>Forgot password</Link>

					<div className=" card-actions justify-center">
						<button className="btn btn-circle btn-sm px-24 btn-neutral w-[3rem]">Login</button>
					</div>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default Login;
