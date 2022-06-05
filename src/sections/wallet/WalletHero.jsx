import React from 'react'
import Button from '../../components/Button'

function WalletHero() {
  return (
    <section className='items-center my-16 justify-items-center justify-center'>
      <div className='font-black md:text-4xl items-center  text-center text-brand-primary mb-8'>
          <h2>BUY, STORE, SEND, RECEIVE AND  <span className='text-brand-secondary'>CHAT</span></h2>
      </div>
      <div className='text-center md:text-2xl text-brand-primary mx-auto mb-15'>
          <p className='w-2/3 mx-auto'>The Mula wallet is an easy-to-use multi-chain and multi-currency wallet.</p>
           <p className='w-2/3 mx-auto'> A wallet that gives your complete control over your assets.</p>
      </div>
      <div className='justify-center flex mx-auto'>
        <Button className=" flex-auto">
          DOWNLOAD MULA WALLET
        </Button>
        
      </div>
      
    </section>
  )
}

export default WalletHero