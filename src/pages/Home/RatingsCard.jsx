import React from "react";

const RatingsCard = ({ image, title, stars, price }) => {
	return (
		<div className="shadow-special rounded-xl border border-[#3992ED] p-2 flex flex-col justify-between ">
			<img src={image} alt="" className=" w-full" />
			<h5 className="font-semibold text-lg lg:text-2xl my-2">{title}</h5>
			<div className=" flex mb-2">{stars}</div>
			<p>{price}</p>
		</div>
	);
};

export default RatingsCard;
