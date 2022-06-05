import React from 'react'
import Button  from "../../components/Button"
import ButtonAlt from '../../components/ButtonAlt'

function TokenHero() {
  return (
    <section className='items-center my-16 justify-items-center justify-center'>
      <div className='font-black md:text-4xl items-center  text-center text-brand-primary mb-8'>
          <h2>WHAT IS MULA <span className='text-brand-secondary'>TOKEN?</span></h2>
      </div>
      <div className='text-center md:text-2xl text-brand-primary mx-auto mb-15'>
          <p className=' mx-auto'>The Mula token is a virtual currency serving as a transferable and tradable asset or utility performer within the Mula ecosystem. 
          Mula token resides on the Binance smart-chain and also allows the holder to invest in DeFi protocols such as Cassava. </p>
          
      </div>
      <div className='justify-center flex mx-auto'>
        <Button className=" flex-auto">
          DOWNLOAD MULA WALLET
        </Button>
        <div className='m-4'>
           
        </div>
        <ButtonAlt className=" flex-auto ">
          SEE MULA WHITE PAPER
        </ButtonAlt>
      </div>
      
    </section>
  )
}

export default TokenHero