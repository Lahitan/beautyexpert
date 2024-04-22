import React from 'react'
import { Link } from "react-router-dom";
import reset from "../../assets/reset.png"
import eye from "../../assets/eye-logo.png"


const background = {
    backgroundImage: `url(${reset})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    width: '100%',
    height: '100vh'
}



const ResetPassword = () => {
  return (
    <div className=" items-center bg-primary-brand text-black">
      <div className="grid md:grid-cols-2 lg:grid-cols-2">
							{/* background image */}
							<div style={background} className=" ">
								{/* headings */}
				

								<div className="flex flex-col items-center justify-center  absolute inset-x-2 mb-16  ">
									<h1 className=" font-bold lg:text-2xl mb-2">Reset Password</h1>
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
								Some tips for you:
								</p>
                                <ol>
                                    <li>Ensure your new password is strong and unique.</li>
                                    <li>Make it something you can remember, but not too obvious.</li>
                                    <li>Click "Reset Password" and you're good to go!</li>
                                </ol>
							</div>
							<div>
                                 <div>
                                        <span className="label-text font-bold">Password</span>
                                        <label className="input input-bordered flex items-center gap-2 bg-primary-brand lg:mb-[0.8rem]">
                                            <input
                                                type="password"
                                                className="grow"
                                                placeholder="Password"
                                            />
                                            <img src={eye} alt="" />
                                        </label>
                                        <span className=" text-xs text-gray-400">
                                            Password must be 8 characters
                                        </span>
                                    </div>
                                    <div>
                                        <label className="input input-bordered flex items-center gap-2 bg-primary-brand ">
                                            <input
                                                type="password"
                                                className="grow"
                                                placeholder="Confirm password"
                                            />
                                            <img src={eye} alt="" />
                                        </label>
								</div>
							</div>
						</div>
						
                        {/* button */}
						<div className=" card-actions justify-start py-3">							
                            <Link to={"/forgetPassword"} className=" ">
								<button className="btn btn-circle btn-sm px-24 btn-neutral">Next</button>
							</Link>							
						</div>
					</div>
					</div>
					{/* end of form  */}

				</div>
    </div>
  )
}

export default ResetPassword
