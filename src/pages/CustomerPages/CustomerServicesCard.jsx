import React from 'react'

const CustomerServicesCard = ({ image, title, stars, price, heartLogo }) => {
	return (
		<div className="shadow-special rounded-xl border border-[#3992ED] p-2 flex flex-col justify-between ">
			<img src={image} alt="" className=" w-full" />
			<h5 className="font-semibold text-lg lg:text-2xl my-2">{title}</h5>
			<div className=" flex mb-2">{stars}</div>
            <div className=" flex flex-col-2 justify-between">
                <p>{price}</p>
                <img src={heartLogo} alt="" className=' w-8 h-8'/>
            </div>
		</div>
	);
};


export default CustomerServicesCard
