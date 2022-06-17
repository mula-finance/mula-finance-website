import React from 'react'
import chatFrame from "../../assets/img/chat-frame.png"
import Button from '../../components/Button'


function WalletMore() {
  return (
    <section className=' bg-brand-grey p-10 lg:pl-32 lg:pr-32 md:pl-10 md:pr-10 rounded-3xl mb-10 md:my-20 text-white m-5' >
      <div className=' md:grid md:grid-cols-2 text-center md:text-left'>
        <div className='md:mr-10 mr-0 m-auto'>
          <div className='font-bold lg:text-4xl text-2xl sm:text-xl'>
              <h2 className='text-brand-primary'>MORE THAN JUST A</h2>
              <h2 className='text-brand-secondary '> WALLET</h2>
          </div>
          <p className='lg:text-2xl mt-5 text-brand-primary'>
          Express yourself in each payment. The Mula wallet allows you easily connect with the people you love.
          </p>
          <p className='lg:text-2xl mt-5 text-brand-primary'>
          Easily send money to your loved ones just as you chat with them.
          </p>

          
          <Button>DOWNLOAD WALLET</Button>
        </div>
        <div className='justify-item-center '>
          <img src={chatFrame} alt="chat frame" />
        </div>
      </div>
    </section>
  )
}

export default WalletMore