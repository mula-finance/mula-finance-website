import React from 'react'
import thumbNail from "../../assets/img/black-video-thumbnail.jpg"

function FounderIntro() {
  return (
    <section className='m-10 my-20 item-center rounded-3xl  p-10 md:p-20 lg:bg-founder-vide-bg md:bg-repeat-round bg-no-repeat   bg-contain bg-brand-primary justify-items-center'>
        <div className='text-white font-bold lg:text-4xl md:text-2xl text-center mb-20 text-tiny'>
            <h2>MULA FINANCE IS BRINGING THE AFRICAN</h2>
            <h2><span className='text-brand-secondary'>COMMUNITY</span> TO YOUR FINGER TIPS</h2>
        </div>
        
        <img src={thumbNail} alt="thumbnail" className='item-center mx-auto pb-50' />
    </section>
  )
}

export default FounderIntro