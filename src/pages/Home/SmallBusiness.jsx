import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import { SiAwsorganizations } from "react-icons/si";
import { ImCheckmark2 } from "react-icons/im";
import barbershop from "../../assets/barbershop-waiting-1.png";

const SmallBusiness = () => {
	return (
		<div className=" flex py-4 flex-wrap-reverse">
			<div className="md:bg-[#CEE8FB] flex-1 p-4 rounded-lg">
				<h3 className=" text-3xl font-bold mb-10">
					Why small businesses use Beauty <br /> Xpats
				</h3>
				<div>
					{arr.map((each, i) => (
						<div key={i} className="flex gap-2 text-lg mt-5">
							<div className=" border border-secondary-brand rounded-full py-1 px-1 flex justify-between items-center self-start">
								{each.image}
							</div>
							<div>
								<h4 className=" text-2xl font-semibold mb-1">{each.title}</h4>
								<p>{each.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div>
				<img
					src={barbershop}
					alt=""
					className="hidden md:inline-block flex-1"
				/>
			</div>
		</div>
	);
};

const arr = [
	{
		image: <FaArrowTrendUp className=" text-secondary-brand text-lg" />,
		title: "Attract new clients and grow your business",
		text: "Expand your reach beyond your local network and attract clients actively seeking beauty services on Beauty Xpats.",
	},
	{
		image: <CiWallet className=" text-secondary-brand text-lg" />,
		title: "Flexible payment plans",
		text: "Choose the plan that best suits your needs, with options catering to both new and established businesses.",
	},
	{
		image: <SiAwsorganizations className=" text-secondary-brand text-lg" />,
		title: "Effortless business management",
		text: "Manage all your appointments in one place, saving time and reducing administrative hassles.",
	},
	{
		image: <ImCheckmark2 className=" text-secondary-brand text-lg" />,
		title: "Build your brand reputation",
		text: "Earn positive client reviews that build trust and attract new clientele.",
	},
];
export default SmallBusiness;
