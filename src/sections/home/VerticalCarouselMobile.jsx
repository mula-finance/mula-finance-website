import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {carouselData} from "./data"


function VerticalCarouselMobile() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows:false,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 4000,
      };
  return (
    
    <div className='md:hidden inline-block h-full bg-brand-primary pt-10 md:pl-32 md:pr-28  rounded-3xl m-5 text-white' >

        <Slider {...settings}>

            {carouselData.map((item)=>(
                <div key={item.id}>
                    <div className='md:grid md:grid-cols-2 gap-8 px-5 justify-center'>

                        <div className='mx-auto items-center text-center my-5'>
                            <div className='bg-brand-secondary mx-auto w-fit p-5 rounded-2xl text-2xl'>
                            {item.icon}
                            </div>
                            <div className='font-bold lg:text-4xl mt-5 md:text-2xl md:text-left text-center'>
                                <h2 className='text-brand-secondary'>{item.head} </h2>
                                <h2 className='text-white '> {item.title}</h2>
                            </div>
                            <div  className='text-white lg:text-2xl mt-5'>
                                <p>{item.subtitle}</p>
                            </div>
                        </div>
                        <div className=''>
                            <img src={item.image} alt="placeholder" className='md:full md:h-full' />
                        </div>
                    </div> 
                </div>
            ))
        }
        </Slider>
    </div>
  )
}

export default VerticalCarouselMobile


        