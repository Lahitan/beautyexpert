import React from 'react'
import fullStar from '../assets/fullStar.png'
import halfStar from '../assets/halfStar.png'
import angelina from '../assets/angelina.png'
import kayode from '../assets/kayode.png'
import esther from '../assets/esther.png'

const Testimonials = () => {
  return (
    <>
    <div className=' bg-primary-brand ' >
        <div>
            <h4 className=" font-montserrat font-bold text-3xl text-center ">Testimonials</h4>
            <h6 className=' font-openSans font-normal text-2xl text-center' >What our customers say... </h6>
        </div> 
        {/* testimonial card container */}
        <div>
            {/* card 1 */}
            <div className=' review-everything-else w-80 mt-14 text-justify font-openSans gap-2 font-normal '  >
                <p>“Beauty Xpats website na the real deal oh! I no fit believe how easy I find Oyinda wey dey braid hair pass other hairdressers for my area. Plus, her prices not too high.”
                </p>
                <div className=' pic-everthing-else bg-secondary-brand flex gap-5 p-3 mr-1 rounded-xl items-center justify-between' >
                    <img src={angelina} alt="selfie of a girl with shadow across her face" className='w-18 h-20 border-2 border-solid border-white flex-none flex-grow-0' />
                    <div className=' star-name-location flex flex-col items-start p-0 w-48 h-18 flex-none flex-grow-0' >
                        <div className='flex' >
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                        </div>
                        <p className=' font-montserrat font-bold text-2xl text-white leading-7'>Angelina</p>
                        <p className='font-normal text-base leading-5 text-white' >Warri, Nigeria</p>
                    </div>
                </div>
            </div> 
                   {/* card 2  */}
            <div className=' review-everything-else w-80 my-6 text-justify font-openSans gap-2 font-normal '  >
                <p>“The platform is user-friendly and allows me to find qualified professionals in my area with ease. I recently booked a haircut and style with a fantastic stylist who listened to my needs and delivered amazing results. I will definitely be using Beauty Xpats again and recommending it to my friends.”
                </p>
                <div className=' pic-everthing-else bg-secondary-brand flex gap-5 p-3 mr-1 rounded-xl items-center justify-between' >
                    <img src={kayode} alt="picture of a bearded man" className='w-18 h-20 border-2 border-solid border-white flex-none flex-grow-0' />
                    <div className=' star-name-location flex flex-col items-start p-0 w-48 h-18 flex-none flex-grow-0' >
                        <div className='flex' >
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={halfStar} alt="half-star" />
                        </div>
                        <p className=' font-montserrat font-bold text-2xl text-white leading-7'>Kayode Ojo</p>
                        <p className='font-normal text-base leading-5 text-white' >Lagos, Nigeria</p>
                    </div>
                </div>
            </div>   
                 {/*card 3  */}
            <div className=' review-everything-else w-80 my-6 text-justify font-openSans gap-2 font-normal '  >
                <p>“I was initially hesitant about using an online platform to find a new makeup artist, but Beauty Xpats put my worries at ease. I booked with a highly-rated makeup artist for my wedding, and she was incredible! I highly recommend Beauty Xpats for anyone seeking trustworthy and talented beauty professionals.”
                </p>
                <div className=' pic-everthing-else bg-secondary-brand flex gap-5 p-3 mr-1 rounded-xl items-center justify-between' >
                    <img src={esther} alt="picture of a girl wearing traditional regalia" className='w-18 h-20 border-2 border-solid border-white flex-none flex-grow-0' />
                    <div className=' star-name-location flex flex-col items-start p-0 w-48 h-18 flex-none flex-grow-0' >
                        <div className='flex' >
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={halfStar} alt="half-star" />
                        </div>
                        <p className=' font-montserrat font-bold text-2xl text-white leading-7'>Esther Ubong</p>
                        <p className='font-normal text-base leading-5 text-white' >Warri, Nigeria</p>
                    </div>
                </div>
            </div>        
        </div>   
            

        
    </div>
    </>
    
  )
}

export default Testimonials
