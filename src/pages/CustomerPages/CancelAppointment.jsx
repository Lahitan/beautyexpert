import React, { useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import CustomerDash from "./CustomerDash";
import { useNavigate } from "react-router-dom";

const CancelAppointment = () => {
	const [inputValue, setInputValue] = useState("");

	let navigate = useNavigate();

	console.log(inputValue, inputValue.toLowerCase() == "cancel");

	return (
		<div className="flex bg-primary-brand text-black ">
			<CustomerDash />
			<div className=" grid place-items-center w-[85vw] my-6">
				<div className="flex p-4 flex-col w-[80%]  lg:w-[800px] bg-white">
					<h3 className="my-4 text-2xl font-bold text-center">
						Cancel Booking
					</h3>
					<p className="my-4 px-10">
						We are sorry to see you cancel your services. To help us improve, we
						have a few short questions for you before you leave us.
					</p>
					<h3 className="mt-3 mb-7 text-2xl font-bold text-center">
						What are your reasons for cancelling?
					</h3>
					<form action="" className="flex flex-col place-items-center">
						<div className="text-end text-lg">
							<div className="flex justify-start text-start gap-2 items-center">
								<input type="checkbox" name="reason" id="" />
								<label htmlFor="">Features I need are missing</label>
							</div>
							<div className="flex justify-start text-start gap-2 items-center">
								<input type="checkbox" name="reason" id="" />
								<label htmlFor="">Services are too expensive</label>
							</div>
							<div className="flex justify-start text-start gap-2 items-center">
								<input type="checkbox" name="reason" id="" />
								<label htmlFor="">I am done with the service I need</label>
							</div>
							<div className="flex justify-start text-start gap-2 items-center">
								<input type="checkbox" name="reason" id="" />
								<label htmlFor="">
									I find it difficult to book on this site
								</label>
							</div>
							<div className="flex justify-start text-start gap-2 items-center">
								<input type="checkbox" name="reason" id="" />
								<label htmlFor="">I am using a different website</label>
							</div>
							<div className="flex justify-start text-start gap-2 items-center">
								<input type="checkbox" name="reason" id="" />
								<label htmlFor="">I no longer need this services</label>
							</div>
						</div>
					</form>
					<div className="flex flex-col place-items-center mt-4">
						<p className="my-4 font-semibold text-xl">
							Type 'CANCEL' to confirm
						</p>
						<input
							type="text"
							className="bg-[#3EB772] p-2 mb-4 w-2/3 rounded-md"
							value={inputValue}
							onChange={(e) => {
								setInputValue(e.target.value);
							}}
						/>
						<button
							className="rounded-lg py-1.5 px-5 bg-[#FF3A29] text-white flex items-center justify-center gap-2 w-2/3"
							disabled={inputValue.toLowerCase() !== "cancel"}
							onClick={(e) => {
								!e.target.disabled && navigate("/ScheduleCancel");
							}}
						>
							{" "}
							<FaRegCircleXmark /> Cancel Booking
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CancelAppointment;
