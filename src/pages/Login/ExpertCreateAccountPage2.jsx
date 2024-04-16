import React from 'react'
import barber from "../../assets/barber-background-image.png"
import line from "../../assets/line-logo.png"
import brokenLine from "../../assets/broken-line.png"
import unchecked from "../../assets/unchecked-logo.png"
import checked from "../../assets/checked-logo.png"
import wideLine from "../../assets/wide-line.png"

const background = {
    backgroundImage: `url(${barber})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    width: '100%',
    height: '100%'
}

const ExpertCreateAccountPage2 = () => {
  return (
    <div className=' items-center bg-primary-brand  ' >
        <div className="grid md:grid-cols-2 lg:grid-cols-2 ">
            {/* background image */}
            <div style={background} className=' ' >
                {/* headings */}
                <div className='flex flex-col items-center justify-center '>
                    <h1 className=' font-bold' >Create an account as an expert</h1>
                </div>
            </div>
            <div>
                <div className=' grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 place-items-center text-xs gap-3 p-5 mt-10 '>
                    <img src={wideLine} alt="" className=' md:hidden lg:hidden ' />
                    {/* sign in steps */}
                    <div className=' flex flex-row items-center p-0 w-32 h-6 flex-none order-1 flex-grow-0' >
                        <img src={checked} alt="" />
                        <div className='p-2' >
                            <h3 className='font-bold' >STEP 1</h3>
                            <p>Create account</p>
                        </div>
                    </div>
                    <div className=' sm:flex flex-row items-center p-0 w-32 h-6 flex-none order-1 flex-grow-0 hidden' >
                        <img src={brokenLine} alt="" />
                        <img src={unchecked} alt="" />
                        <div className='p-2' >
                            <h3 className='font-bold' >STEP 2</h3>

                            <p>Upload Portfolio</p>
                        </div>
                    </div>
                    <div className=' sm:flex flex-row items-center p-0 w-32 h-6 flex-none order-1 flex-grow-0 hidden ' >
                        <img src={line} alt="" />
                        <img src={unchecked} alt="" />
                        <h3 className='p-2 font-bold '>STEP 3</h3>
                    </div>
                    <div className=' sm:flex flex-row items-center p-0 w-32 h-6 flex-none order-1 flex-grow-0 hidden' >
                        <img src={line} alt="" />
                        <img src={unchecked} alt="" />
                        <h3 className='p-2 font-bold '>STEP 4</h3>
                    </div>

                </div>
                {/* end of sign in steps */}
                {/* form */}
                <div className=" w-6/12 m-auto my-7  ">
                   <div className=' flex flex-col items-start   ' >
                   <div >
                        <span className='label-text font-bold'>Business Name</span>
                        <label className="input input-bordered flex items-center gap-9 bg-primary-brand ">
                            <input type="text" className="grow " placeholder="Enter your business name " />
                        </label>
                    </div>
                    <div>
                        <p>
                            <span className='label-text font-bold'>Business Location</span>
                        </p>
                        <p>
                            <span className='label-text font-bold'>Address Line 1 </span>
                        </p>
                        <label className="input input-bordered flex items-center gap-9 bg-primary-brand ">
                            <input type="text" className="grow" placeholder="12 Adeola Odeku Street, Victoria Island" />
                        </label>
                        <p>
                            <span className='label-text font-bold'>Address Line 2 (optional)</span>
                        </p>
                        <label className="input input-bordered flex items-center gap-9 bg-primary-brand ">
                            <input type="text" className="grow" placeholder="Suite A3, Victoria Island Plaza" />
                        </label>
                    </div>
                    <div>
                    <div>
                        <span className='label-text font-bold'>Service category</span>
                            <select className="select select-bordered w-full max-w-xs bg-primary-brand" >
                                <option className='bg-white  ' disabled selected>Select a service you offer</option>
                                <option className='bg-white'>Fashion designer</option>
                                <option className='bg-white'>Makeup artist</option>
                                <option className='bg-white'>Hair Stylist</option>
                                <option className='bg-white'>Barber</option>
                                <option className='bg-white'>Personal Stylist</option>
                                <option className='bg-white'>Nail technician</option>
                            </select>
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text font-bold">Service description</span>
                            </div>
                            <textarea className="textarea textarea-bordered bg-primary-brand h-24" placeholder="Describe your service"></textarea>
                        </label>
                    </div>
                    <div>
                        <span className='label-text font-bold'>Years of experience</span>
                        <label className="input input-bordered flex items-center gap-2 bg-primary-brand ">
                            <input type="text" className="grow" placeholder='2 years'  />
                        </label>
                    </div>
                    </div>
                   </div>
                    {/* button */}
                <div className=" card-actions justify-center">
                    <button className="btn btn-circle btn-sm px-16 btn-neutral">Next</button>
                </div>
                </div>
                {/* end of form  */}
            </div>
            
        </div>       
    </div>
  )
}

export default ExpertCreateAccountPage2
