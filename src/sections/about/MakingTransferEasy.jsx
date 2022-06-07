import React from 'react'
import Button from "../../components/Button"
import receive from "../../assets/img/mula-receive-money.png"
function MakingTransferEasy() {
  return (
    <section className=' bg-brand-grey m-10  lg:pl-32 lg:pr-32  md:pr-10 md:pl-10  md:pt-10 rounded-3xl mb-10 mt-20  text-white pl-5 pt-5 pr-5'>
        <div className=' md:grid md:grid-cols-2 text-center md:text-left'>
          <div className='text-brand-primary rounded-3xl   md:mr-10 mr-0 m-auto'>
              <div className='font-black lg:text-4xl md:text-2xl my-2'>
              <h2>MAKING TRANSFER EASY <span className='text-brand-secondary'>FOR AFRICANS</span></h2>
              </div>
              <div className='lg:text-2xl  text-tiny mt-5  text-brand-primary '>
                  <p className='mb-3'>
                  Every African knows at least one person that schools or buys products from another African country. And as Africans we realized the difficulty in sending or receiving another African currency, this is why we built MULA for you. 
                  </p>
                  <p>
                  MULA does your African transactions in simple steps that takes less than a minute at affordable rate.
                  </p>
              </div>
              <Button>
                    DOWNLOAD MULA WALLET
                  </Button>
          </div>
          <div>
           <img src={receive} alt="Mula ecosystem" className=' mx-auto'   />
          </div>
        </div>
    </section>
  )
}

export default MakingTransferEasy