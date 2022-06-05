import React from 'react'
import ButtonAlt from "../../components/ButtonAlt"
import chatFrame from "../../assets/img/chat-frame.png"
function MoreThanJustAWallet() {
  return (
    <section className='bg-brand-primary pt-20 lg:pl-32 lg:pr-32 md:pl-10 md:pr-10 p-3 rounded-3xl mb-10 mt-20' >
    <div className=' md:grid md:grid-cols-2 text-center md:text-left'>
      <div className='md:mr-10 mr-0 m-auto'>
        <div className='font-bold lg:text-4xl text-2xl sm:text-xl'>
            <h2 className='text-white'>MORE THAN JUST A</h2>
            <h2 className='text-brand-secondary '> WALLET</h2>
        </div>
        <p className='lg:text-2xl mt-5 text-white text-tiny'>
        Express yourself in each payment. The Mula wallet allows you easily connect with the people you love.<br/> Easily send money to your loved one just as you chat with them.
        </p>
        <ButtonAlt>DOWNLOAD WALLET</ButtonAlt>
      </div>
      <div className='justify-item-center'>
        <img src={chatFrame} alt="chat frame" />
      </div>
    </div>
  </section>
  )
}

export default MoreThanJustAWallet