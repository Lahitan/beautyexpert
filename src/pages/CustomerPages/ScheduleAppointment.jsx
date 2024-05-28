import React from "react";
import CustomerDash from "./CustomerDash";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

import { DatePicker } from "@mui/x-date-pickers";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Link } from "react-router-dom";
import ConfirmedModal from "./ConfirmedModal";

const ScheduleAppointment = () => {
	const [startTimeValue, setStartTimeValue] = React.useState(
		dayjs("2022-04-17T15:30")
	);
	const [endTimeValue, setEndTimeValue] = React.useState(
		dayjs("2022-04-17T15:30")
	);
	const [dateValue, setDateValue] = React.useState(dayjs("2022-04-17"));
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div className="flex bg-primary-brand text-black ">
				<CustomerDash />
				<div className=" grid place-items-center w-[85vw] my-6">
					<div className="flex p-4 flex-col w-[80%]  lg:w-[800px] bg-white">
						<div className=" flex flex-col justify-center items-center">
							<DemoContainer
								components={
									(["TimePicker", "TimePicker"],
									["DateCalendar", "DateCalendar"])
								}
							>
								<DemoItem label="Pick a date">
									<DateCalendar
										value={dateValue}
										onChange={(newValue) => setDateValue(newValue)}
										className="self-center"
									/>
								</DemoItem>
								<div className="flex gap-2">
									<TimePicker
										label="Pick a start time"
										value={startTimeValue}
										onChange={(newValue) => setStartTimeValue(newValue)}
										className=""
									/>
									<TimePicker
										label="Pick an end time"
										value={endTimeValue}
										onChange={(newValue) => setEndTimeValue(newValue)}
										className=""
									/>
								</div>
							</DemoContainer>
						</div>
						<div className="display bg-[#3EB772] mt-5 rounded-md p-4 w-[70%] self-center">
							<div className="flex justify-between">
								<p>
									TJ Unix salon <br /> ₦15,000
								</p>
								<div>
									<p>{dateValue.format("LL")}</p>
									<p>{`${startTimeValue.format("LT")} - ${endTimeValue.format(
										"LT"
									)} `}</p>
								</div>
							</div>
						</div>
						<div className="add-another ps-28">
							<button className=" bg-primary-brand rounded-sm p-1 text-[#3EB772] mt-4">
								+ add another service
							</button>
						</div>

						<p className="total text-right">Total {}</p>

						<button
							className=" bg-tertiary-brand rounded-md p-1 w-1/2 self-center text-white mt-4"
							onClick={() => document.getElementById("my_modal_3").showModal()}
						>
							continue
						</button>
						<ConfirmedModal
							date={dateValue.format("LL")}
							time={{
								start: startTimeValue.format("LT"),
								end: endTimeValue.format("LT"),
							}}
						/>
					</div>
				</div>
			</div>
		</LocalizationProvider>
	);
};

export default ScheduleAppointment;
