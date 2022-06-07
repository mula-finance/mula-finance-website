import React from 'react'
import Button from '../../components/Button'

function AboutHero() {
  return (
    <section className='items-center md:my-16 justify-items-center justify-center'>
      <div className='font-black text-2xl md:text-4xl items-center  text-center text-brand-primary mb-8'>
          <h2>MADE BY AFRICANS FOR <span className='text-brand-secondary'>AFRICA</span></h2>
      </div>
      <div className='text-center md:text-2xl text-tiny  text-brand-primary mx-auto mb-15'>
          <p className='w-2/3 mx-auto'>Whether you are sending or spending a rand, cedi, naira, CFA franc, kwanza or pound MULA is here to make African transactions easy, fast & smooth.</p>
      </div>
      <div className='justify-center flex'>
        <Button className="mx-auto">
          DOWNLOAD MULA WALLET
        </Button>
      </div>
      
    </section>
  )
}

export default AboutHero