import React from 'react'
import Button  from "../../components/Button"

function TokenHero() {
  return (
    <section className='items-center md:my-16 justify-items-center justify-center'>
      <div className='font-black text-2xl md:text-4xl items-center  text-center text-brand-primary mb-8'>
          <h2>WHAT IS MULA <span className='text-brand-secondary'>TOKEN?</span></h2>
      </div>
      <div className='text-center md:w-2/4 md:text-2xl text-brand-primary mb-15 m-5 text-lg mx-auto px-5'>
          <p className=''>The Mula token is a virtual currency serving as a transferable and tradable asset or utility performer within the Mula ecosystem. </p>
          <p className=''>Mula token resides on the Binance smart-chain and also allows the holder to invest in DeFi protocols such as Cassava. </p>          
      </div>
      <div className='flex justify-items-center justify-center align-middle'>
        <Button className="mx-auto items-center ">
          SEE MULA WHITE PAPER
        </Button>
      </div>
      
    </section>
  )
}

export default TokenHero