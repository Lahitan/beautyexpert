import React from "react";
import { Link } from "react-router-dom";
import Customer_account from "../../assets/customer-account.png"
import eye from "../../assets/eye-logo.png"


const background = {
    backgroundImage: `url(${Customer_account})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    width: '100%',
    height: '100vh'
}

const CustomerCreateAcount = () => {
	return (
			<div className="  items-center bg-primary-brand relative">

				<div className="grid md:grid-cols-2 lg:grid-cols-2">
					{/*------image box---*/}
					<div  style={background} className=' ' >

						<div className='flex flex-col items-center justify-center  absolute inset-x-2 my-7'>
							<h1 className=' font-bold lg:text-2xl mb-2' >Create an account as a customer</h1>

							<span className="lg: text-lg">Already have an account ? <Link to={"/login"} className=" text-black-700 text-lg font-bold">
									Log in
							</Link></span>

						</div>
					</div>

					 {/* form */}

					<div className="absolute top-[10rem] left-[45rem]">
						<div className=" flex flex-col  place-items-center gap-10 w-[100%] h-[450px]  ">
							<div className=' flex flex-col  items-start   ' >
									<div >
										<span className='label-text font-bold'>First Name</span>
										<label className="input input-bordered flex items-center gap-9 bg-primary-brand mb-[1rem]">
											<input type="text" className="grow" placeholder="Ajoke" />
										</label>
										<span className='label-text font-bold'>Last Name</span>
										<label className="input input-bordered flex items-center gap-9 bg-primary-brand mb-[1rem]">
											<input type="text" className="grow" placeholder="Chidi" />
										</label>
								</div>

								<div>
									<div>
										<span className='label-text font-bold'>Email</span>
										<label className="input input-bordered flex items-center gap-2 bg-primary-brand mb-[1rem]">
											<input type="text" className="grow" placeholder="Enter your email address" />
										</label>
									</div>

									<div>
										<span className='label-text font-bold'>Password</span>
											<label className="input input-bordered flex items-center gap-2 bg-primary-brand mb-[1rem]">
												<input type="password" className="grow" placeholder='Password' />
												<img src={eye} alt="" />
											</label>
										<span className=' text-xs text-gray-400'>Password must be 8 characters</span>
									</div>

										<div>
											<label className="input input-bordered flex items-center gap-2 bg-primary-brand mb-[1rem]">
												<input type="password" className="grow" placeholder='Confirm password'  />
												<img src={eye} alt="" />
											</label>
										</div>
							
							</div>
						</div>
				   </div>
								{/* button */}
							<div className=" card-actions justify-center">
									<button className="btn btn-circle btn-sm px-28 btn-neutral">Next</button>
							</div>
                </div>

				{/* end of sign in steps */}
				
				</div>
			</div>  	
	
	);
};

export default CustomerCreateAcount;
         