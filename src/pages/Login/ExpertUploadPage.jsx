import React from 'react'
import barber from "../../assets/barber-background-image.png"
import line from "../../assets/line-logo.png"
import brokenLine from "../../assets/broken-line.png"
import unchecked from "../../assets/unchecked-logo.png"
import checked from "../../assets/checked-logo.png"
import wideLine from "../../assets/wide-line.png"
import nailTech from "../../assets/nail-tech-background-image.png"

const background = {
    backgroundImage: `url(${nailTech})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    width: '100%',
    height: '100vh'
}

const ExpertUploadPage = () => {
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
                    <div className=' flex flex-row items-center p-0 w-32 h-6 flex-none order-1 flex-grow-0 ' >
                        <img src={brokenLine} alt="" />
                        <img src={unchecked} alt="" />
                        <div className='p-2' >
                            <h3 className='font-bold' >STEP 2</h3>

                            <p>Upload Portfolio</p>
                        </div>
                    </div>
                    <div className=' flex flex-row items-center p-0 w-32 h-6 flex-none order-1 flex-grow-0  ' >
                        <img src={line} alt="" />
                        <img src={unchecked} alt="" />
                        <h3 className='p-2 font-bold '>STEP 3</h3>
                    </div>
                    <div className=' flex flex-row items-center p-0 w-32 h-6 flex-none order-1 flex-grow-0 ' >
                        <img src={line} alt="" />
                        <img src={unchecked} alt="" />
                        <h3 className='p-2 font-bold '>STEP 4</h3>
                    </div>

                </div>
                {/* end of sign in steps */}
                {/* form */}
                <div className=" flex flex-col place-items-center gap-10 w-[100%] h-[466px] my-7  ">
                    <div className=' flex flex-col items-start  ' >
                        {/* featured image upload */}
                        <div >
                        <span className='label-text font-bold'>Featured Image</span>
                        <p className='text-md' >Upload a specific image to be the main thumbnail representing your portfolio</p>

                        </div>

                        <hr /><hr /><br /><br />
                        {/* image upload */}

                        <div>
                            <p>
                                <span className='label-text font-bold'>File upload (Images)</span>
                            </p>
                            <p className='text-md' >Include a selection of high quality images representing your range of services (before and after photos, etc).</p>
                        
                        </div>

                        <hr /><hr /><br /><br />
                        {/* video upload */}

                        <div>                       
                            <p>
                                <span className='label-text font-bold'>File upload (Videos)</span>
                            </p>
                            <p className='text-md' >Include a selection of short, high quality clips highlighting your techniques or client testimonials.</p>
                        
                        </div>
                        {/* end of uploads */}
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

export default ExpertUploadPage
