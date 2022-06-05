import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {carouselData} from "./data"


function VerticalCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows:false,
        autoplay: false,
        speed: 800,
        autoplaySpeed: 4000,
      };
  return (
    
    <div className='hidden md:inline-block h-full bg-brand-primary pt-20 md:pl-32 md:pr-28 md:m-0 m-5 rounded-3xl mb-10 text-white' >

        <Slider {...settings}>

            {carouselData.map((item)=>(
                <div key={item.id}>
                    <div className='md:grid md:grid-cols-2 gap-8'>
                        <div className=' md:shrink-0'>
                            <img src={item.image} alt="placeholder" className='md:full md:h-full' />
                        </div>
                        <div className='m-auto'>
                            <div className='bg-brand-secondary w-fit p-5 rounded-2xl text-2xl'>
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
                    </div> 
                </div>
            ))
        }
        </Slider>
    </div>
  )
}

export default VerticalCarousel


        