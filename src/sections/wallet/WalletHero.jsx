import React from 'react'
import Button from '../../components/Button'

function WalletHero() {
  return (
    <section className='items-center md:my-16 justify-items-center justify-center'>
      <div className='font-black text-2xl md:text-4xl items-center  text-center text-brand-primary mb-8'>
          <h2>BUY, STORE, SEND, RECEIVE AND  <span className='text-brand-secondary'>CHAT</span></h2>
      </div>
      <div className='text-center md:text-2xl text-brand-primary  mb-15 text-xl  m-10'>
          <p className=''>The Mula wallet is an easy-to-use multi-chain and multi-currency wallet that gives your complete control over your assets.</p>
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