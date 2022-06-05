import React from 'react'
import connected from "../../assets/img/connected-africa.jpg"

function SendAndConnect() {
  return (
    <section className='my-20'>
      <div className='mb-5 text-center justify-items-center items-center'>
        <h2 className='text-brand-primary md:text-4xl font-black mx-auto'>
         SEND MONEY <span className='text-brand-secondary'>TO</span> OR <span className='text-brand-secondary'>ACROSS</span> <br/> AFRICA WHILE YOU STAY <span className='text-brand-secondary'>CONNECTED</span>
        </h2>
      </div>
      <img src={connected} alt="MULA IS CONNECTING AFRICA" className='rounded-3xl max-w-full bg-cover'/>
    </section>
  )
}

export default SendAndConnect