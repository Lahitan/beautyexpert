import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import image1 from "../../assets/hair-dresser-flier-21.png";
import image2 from "../../assets/makeup-flier-21.png";
import image3 from "../../assets/hair-dresser-flier-11.png";
import image4 from "../../assets/barber-flier-11.png";
import RatingsCard from "./RatingsCard";

const Ratings = () => {
	return (
		<div className="my-8">
			<h3 className=" font-semibold text-2xl my-6 font-montserrat">
				Top Ratings
			</h3>
			<div className="md:flex justify-between grid grid-cols-2 lg:gap-0 gap-2">
				{arr.map((card, i) => {
					return <RatingsCard key={i} {...card} />;
				})}
			</div>
		</div>
	);
};

const arr = [
	{
		image: image1,
		title: "Betty's Trim",
		stars: [..."12345"].map((each) => (
			<MdOutlineStarPurple500 className="text-[#FFCE31]" />
		)),
		price: "From ₦20,000 ",
	},
	{
		image: image2,
		title: "Rosel Perfect Touch",
		stars: [..."12345"].map((each) => (
			<MdOutlineStarPurple500 className="text-[#FFCE31]" />
		)),
		price: "From ₦30,000 ",
	},
	{
		image: image3,
		title: "Jacky Hair",
		stars: [..."12345"].map((each) => (
			<MdOutlineStarPurple500 className="text-[#FFCE31]" />
		)),
		price: "From ₦15,000 ",
	},
	{
		image: image4,
		title: "Kvng Sammy's Cutz",
		stars: [..."12345"].map((each) => (
			<MdOutlineStarPurple500 className="text-[#FFCE31]" />
		)),
		price: "From ₦5,000 ",
	},
];

export default Ratings;
