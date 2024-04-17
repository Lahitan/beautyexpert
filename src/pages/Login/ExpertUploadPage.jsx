import React from 'react'
import line from "../../assets/line-logo.png"
import brokenLine from "../../assets/broken-line.png"
import unchecked from "../../assets/unchecked-logo.png"
import checked from "../../assets/checked-logo.png"
import wideLine from "../../assets/wide-line.png"
import nailTech from "../../assets/nail-tech-background-image.png"
import upload from "../../assets/octicon_upload-24.png"

const background = {
    backgroundImage: `url(${nailTech})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    width: '100%',
    height: '100%'
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
                    <div className=' sm:flex flex-row items-center p-0 w-32 h-6 flex-none order-1 flex-grow-0 hidden ' >
                        <img src={brokenLine} alt="" />
                        <img src={unchecked} alt="" />
                        <div className='p-2' >
                            <h3 className='font-bold' >STEP 2</h3>
                            <p>Upload Portfolio</p>
                        </div>
                    </div>
                    <div className=' sm:flex flex-row items-center p-0 w-32 h-6 flex-none order-1 flex-grow-0 hidden  ' >
                        <img src={line} alt="" />
                        <img src={unchecked} alt="" />
                        <h3 className='p-2 font-bold '>STEP 3</h3>
                    </div>
                    <div className=' sm:flex flex-row items-center p-0 w-32 h-6 flex-none order-1 flex-grow-0 hidden ' >
                        <img src={line} alt="" />
                        <img src={unchecked} alt="" />
                        <h3 className='p-2 font-bold '>STEP 4</h3>
                    </div>

                </div>
                {/* end of sign in steps */}

                {/* form */}
                <div className=" w-[80%] m-auto my-7 p-3">
                    <div className='  ' >
                        {/* featured image upload */}
                        <div className=' '>
                            <div className='p-2' >
                                <span className='label-text font-bold'>Featured Image</span>
                                <p className='text-md my-2 ' >Upload a specific image to be the main thumbnail representing your portfolio</p>
                            </div>

                            <section className="border border-dashed border-black w-[60%] m-auto p-2 ">
                                <div className=' flex justify-center align-middle m-auto '>
                                    <img src={upload} alt="" />
                                </div>
                            <div className=" text-gray-500 w-70% m-auto ">
                                <p className='flex justify-center align-middle' >Drag file here or click to upload</p>
                                <p className='flex justify-center align-middle'>supported file: <span className=' text-black pl-1 whitespace-normal' >JPG, PNG</span></p>
                                <p className='flex justify-center align-middle'>Max file size: <span className=' text-black pl-1 whitespace-normal' >5mb</span></p>
                            </div>
                            </section>
                        </div>

                        <hr /><hr /><br /><br />
                        {/* image upload */}

                        <div className=' '>
                            <div className='p-2' >
                                <span className='label-text font-bold'>File upload (Images)</span>
                                <p className='text-md my-2' >Include a selection of high quality images representing your range of services (before and after photos, etc).</p>
                            </div>
                            <section className="border border-dashed border-black w-[60%] m-auto p-2 ">
                                <div className='flex justify-center align-middle m-auto ' >
                                    <img src={upload} alt="" />
                                </div>
                                <div className=" text-gray-500 w-70% m-auto ">
                                    <p className='flex justify-center align-middle'>Drag file here or click to upload</p>
                                    <p className='flex justify-center align-middle'>supported file: <span className=' text-black pl-1' >JPG, PNG</span></p>
                                    <p className='flex justify-center align-middle'>Max file size: <span className=' text-black pl-1' >5mb</span></p>
                                </div>  
                            </section>      
                        </div>

                        <hr /><hr /><br /><br />
                        {/* video upload */}

                        <div className=''>     
                            <div className='p-2' >
                                <span className='label-text font-bold'>File upload (Videos)</span>
                                <p className='text-md my-2' >Include a selection of short, high quality clips highlighting your techniques or client testimonials.</p>
                            </div>
                            <section className='border border-dashed border-black w-[60%] m-auto p-2 ' >
                                <div className='flex justify-center align-middle m-auto ' >
                                    <img src={upload} alt="" />
                                </div>
                                <div className="  text-gray-500 w-70% m-auto ">
                                    <p className='flex justify-center align-middle'>Drag file here or click to upload</p>
                                    <p className='flex justify-center align-middle'>supported file: <span className=' text-black pl-1' >JPG, PNG</span></p>
                                    <p className='flex justify-center align-middle'>Max file size: <span className=' text-black pl-1' >5mb</span></p>
                                </div>  
                            </section>
                        </div>
                        {/* end of uploads */}
                    </div>

                    {/* button */}
                    <div className=" card-actions justify-center mt-5 ">
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

