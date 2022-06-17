import React from 'react'
import ButtonInverse from "../../components/ButtonInverse"
import ecosystem from "../../assets/img/mula-ecosystem.png"

function WhyMulaToken() {
  return (
    <section className='md:grid md:grid-cols-2 bg-brand-primary pt-10 lg:pl-10 lg:pr-24 md:pl-10 md:pr-10 p-3 rounded-3xl m-5 md:m-10   text-white'>
       <div className='mb-5'>
           <img src={ecosystem} alt="Mula ecosystem" className=' w-9/12 mx-auto '   />
       </div>
        <div className='text-white rounded-3xl mb-20 m-auto md:text-left text-center'>
            <h4 className='text-brand-secondary font-semibold mb-5'>
                WHY MULA TOKEN
            </h4>
            <div className='font-black md:text-2xl lg:text-4xl mb-8'>
                <h2>MULA TOKEN <span className='text-brand-secondary'>POWERS</span> MULA ECOSYSTEM</h2>
            </div>
            <div className='md:text-2xl mb-15'>
                <p className='mb-5   '>
                With the beauty and transparency of smartcontracts, MULA Token powers the MULA FINANCE Ecosystem to facilitate supper fast, secure and extremely low-cost cross-border transactions.
                </p>
            </div>
            <div className=''>
                <ButtonInverse>
                    SEE MULA WHITE PAPER
                </ButtonInverse>
                
            </div>
        </div>
        
    </section>
  )
}

export default WhyMulaToken