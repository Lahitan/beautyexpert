import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaRegCircleXmark } from "react-icons/fa6";
import { AiOutlineClockCircle } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";
import { Link } from "react-router-dom";

const ConfirmedModal = ({ date, time }) => {
	return (
		<dialog id="my_modal_3" className="modal">
			<div className="modal-box bg-white">
				<form method="dialog">
					{/* if there is a button in form, it will close the modal */}
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
						✕
					</button>
				</form>
				<div className="relative flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="120"
						height="120"
						viewBox="0 0 120 120"
						fill="none"
						className="relative"
					>
						<circle cx="60" cy="60" r="60" fill="#23A26D" fill-opacity="0.12" />
					</svg>
					<IoCheckmarkCircle className=" text-6xl text-[#23A26D] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
				</div>
				<div className="flex flex-col place-items-center">
					<p className="mt-4 text-xl ">Booking confirmed!!!</p>
					<p className="id">Booking ID: 0001896</p>

					<div className="my-8 text-center">
						<h3 className=" font-bold text-xl">TJ;s Unisex Salon </h3>
						<p>address</p>
					</div>

					<div className="flex gap-4 my-6">
						<div className=" border-2 border-gray-300 rounded-lg py-5 px-4 flex flex-col place-items-center gap-2 flex-1 w-[200px]">
							<AiOutlineClockCircle />
							{time.start} - {time.end}
						</div>
						<div className=" border-2 border-gray-300 rounded-lg py-5 px-4 flex flex-col place-items-center gap-2 flex-1 w-[200px]">
							<LuCalendarDays />
							{date}
						</div>
					</div>

					<div className="flex my-10 gap-4">
						<form method="dialog">
							<button className="rounded-lg py-1 px-5 bg-[#0FA958] text-white ">
								Reschedule Booking
							</button>
						</form>
						<Link to={"/CancelAppointment"}>
							<button className="rounded-lg py-1.5 px-5 bg-[#FF3A29] text-white flex items-center gap-2">
								{" "}
								<FaRegCircleXmark /> Cancel Booking
							</button>
						</Link>
					</div>
				</div>
			</div>
		</dialog>
	);
};

export default ConfirmedModal;
