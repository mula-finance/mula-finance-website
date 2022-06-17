import React from 'react'
import Button  from "../../components/Button"

function TokenHero() {
  return (
    <section className='items-center md:my-16 justify-items-center justify-center'>
      <div className='font-black text-2xl md:text-4xl items-center  text-center text-brand-primary mb-8'>
          <h2>WHAT IS MULA <span className='text-brand-secondary'>TOKEN?</span></h2>
      </div>
      <div className='text-center md:text-2xl text-brand-primary mb-15 m-5  text-xl'>
          <p className=''>The Mula token is a virtual currency serving as a transferable and tradable asset or utility performer within the Mula ecosystem. </p>
          <p>Mula token resides on the Binance smart-chain and also allows the holder to invest in DeFi protocols such as Cassava. </p>          
      </div>
      <div className='justify-center md:flex m-10 gap-5'>
         
        
        <Button className=" flex-auto ">
        SEE MULA WHITE PAPER
        </Button>
      </div>
      
    </section>
  )
}

export default TokenHero