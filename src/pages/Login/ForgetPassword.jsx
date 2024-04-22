import React from "react";
import { Link } from "react-router-dom";
import forget from "../../assets/forget.png"

const background = {
    backgroundImage: `url(${forget})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    width: '100%',
    height: '100vh'
}


const ForgetPassword = () => {
	return <div className=" items-center bg-primary-brand text-black">
				<div className="grid md:grid-cols-2 lg:grid-cols-2">
							{/* background image */}
							<div style={background} className=" ">
								{/* headings */}
				

								<div className="flex flex-col items-center justify-center  absolute inset-x-2 mb-16  ">
									<h1 className=" font-bold lg:text-2xl mb-2">Forget Password</h1>
									<h2 className=" text-xs text-center lg:text-base font-semibold">
										No worries, we're here to help you get back on track with Beauty Xpats.
									</h2>
								</div>
							</div>

							<div className="lg: mt-20">
						<div className=" w-10/12 m-auto my-7  ">
						<div className=" flex flex-col items-start ">
							<div className="my-12">
								<p className="text-left  text-xs lg:text-sm font-semibold">
								Just enter the email address associated with your 
								account and we'll send you a quick reset link to get you logged in again.
								</p>
							</div>
							<div>
								<div>
									<label className="input input-bordered flex items-center gap-2 bg-primary-brand lg:mb-[0.8rem]">
										<input
											type="text"
											className="grow"
											placeholder="Enter your email address"
										/>
									</label>
								</div>
							</div>
						</div>
						
                        {/* button */}
						<div className=" card-actions justify-start py-3">							
                            <Link to={"/ResetPassword"} className=" ">
								<button className="btn btn-circle btn-sm px-24 btn-neutral">Next</button>
							</Link>							
						</div>
					</div>
					</div>
					{/* end of form  */}

				</div>
			</div>;
};

export default ForgetPassword;
