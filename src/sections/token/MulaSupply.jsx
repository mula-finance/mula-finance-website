import React from 'react'
import tokenomics from "../../assets/img/tokenomics.png"

function MulaSupply() {
  return (
    <section className='m-10'>
      <h2 className='text-brand-primary md:text-4xl font-black  text-center mb-20'>
      MULA TOKEN <span className='text-brand-secondary'>SUPPLY</span> AND <span className='text-brand-secondary'>DISTRIBUTION</span>
      </h2>
      <img src={tokenomics} alt="mula token distribution chart" className='max-w-xlg' />
    </section>
  )
}

export default MulaSupply