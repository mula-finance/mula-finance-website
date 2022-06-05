import React from 'react'
import delivered from "../../assets/img/mula-delivered-money.png"
import Button from "../../components/ButtonAlt"
function EasySend() {
  return (
    <section className='bg-brand-primary lg:pl-32 lg:pr-32  md:pr-10 md:pl-10  md:pt-10 rounded-3xl mb-10 mt-20  pl-5 pt-5 pr-5 text-white'>
        <div className='md:grid md:grid-cols-2 text-center md:text-left'>
            <div className='text-white rounded-3xl mb-10 m-auto'>
                <div className='font-black lg:text-4xl text-2xl mb-2'>
                <h2>EASILY SEND AND RECEIVE <br/><span className='text-brand-secondary'>MONEY QUICKLY </span></h2>
                </div>
                <div className='lg:text-2xl mt-5   text-white text-tiny'>
                    <p className='mb-5'>
                    Whether you are sending/receiving money to/from another African country or you have travelled to another African country and need money in a new currency, Mula wallet serves you easily with no hassle.
                    </p>
                </div>
                <Button>
                    DOWNLOAD MULA WALLET
                  </Button>
            </div>
            <div>
              <img src={delivered} alt="Mula ecosystem" className=' mx-auto'   />
            </div>
        </div>
    </section>
  )
}

export default EasySend