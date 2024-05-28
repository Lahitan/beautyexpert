import React from "react";

const EditProfile = () => {
	return (
		<div className="grid place-items-center w-[85vw] my-6">
			<div className="flex p-4 flex-col w-[80%]  lg:w-[800px] bg-white">
				<h3 className=" text-black text-start text-2xl border-b-2 border-gray-300 font-bold mb-5">
					Basic Information
				</h3>
				<div className="flex md:flex-row flex-col">
					<div>
						<label htmlFor="">Upload new picture</label>
						<br />
						<input type="file" />
					</div>

					<form action="" className="flex flex-col gap-2">
						<div className="flex gap-2">
							<div>
								<label htmlFor="first-name">First Name</label>
								<input
									type="text"
									className=" bg-[#0FA958] w-full rounded-md p-2"
								/>
							</div>
							<div>
								<label htmlFor="last-name">Last Name</label>
								<input
									type="text"
									className=" bg-[#0FA958] w-full rounded-md p-2"
								/>
							</div>
						</div>
						<div>
							<label htmlFor="">Date of Birth</label>
							<input
								type="text"
								className=" bg-[#0FA958] w-full rounded-md p-2"
							/>
						</div>
						<div>
							<label htmlFor="">Email Address</label>
							<input
								type="email"
								className=" bg-[#0FA958] w-full rounded-md p-2 "
							/>
						</div>
						<div>
							<label htmlFor="">Gender</label>
							<select
								name=""
								id=""
								className=" bg-[#0FA958] w-full rounded-md p-2"
							>
								<option value="Female">Female</option>
								<option value="Male">Male</option>
								<option value="Other">Other</option>
							</select>
						</div>
						<div>
							<label htmlFor="">Residential address</label>
							<input
								type="text"
								className=" bg-[#0FA958] w-full rounded-md p-2"
							/>
						</div>
						<div>
							<label htmlFor="">LGA</label>
							<input
								type="text"
								className=" bg-[#0FA958] w-full rounded-md p-2"
							/>
						</div>
						<div>
							<label htmlFor="">State</label>
							<input
								type="text"
								className=" bg-[#0FA958] w-full rounded-md p-2"
							/>
						</div>
					</form>
				</div>
				<h3 className=" border-t-2 pt-5 mt-6 text-black text-start text-2xl font-bold">
					Account Information
				</h3>
				<form action="">
					<div className="flex flex-col mb-2">
						<label htmlFor="">Username</label>
						<input type="text" className=" bg-[#0FA958] w-1/2 rounded-md p-2" />
					</div>
					<div className="flex flex-col">
						<label htmlFor="">Password</label>
						<input
							type="password"
							className=" bg-[#0FA958] w-1/2 rounded-md p-2"
						/>
					</div>
				</form>
				<div className="flex justify-end mt-5">
					<button className=" text-white block  bg-[#0FA958] w-[120px] px-3 py-2 rounded-lg">
						Save details
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditProfile;
