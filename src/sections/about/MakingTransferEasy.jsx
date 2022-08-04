import React from 'react'
// import Button from "../../components/Button"
import receive from "../../assets/img/mula-delivered-money.png" 
function MakingTransferEasy() {
  // const [modalOn, setModalOn] = useState(false); 

  //   const clicked = () => {
  //     setModalOn(true)
  //   }
  return (
    <section className=' bg-brand-grey m-5 mb-10 mt-20 md:m-10 lg:pl-32 lg:pr-32  md:pr-10 md:pl-10  md:pt-10 rounded-3xl   pl-5 pt-5 pr-5 text-white'>
        <div className=' md:grid md:grid-cols-2 text-center md:text-left'>
          <div className='text-brand-primary rounded-3xl mb-10 m-auto'>
              <div className='font-black lg:text-4xl md:text-2xl mb-2'>
              <h2>MAKING MONEY TRANSFER EASY <span className='text-brand-secondary'>FOR AFRICANS</span></h2>
              </div>
              <div className='lg:text-2xl   mt-5  text-brand-primary '>
                  <p className='mb-5'>
                  Every African knows at least one person that schools or buys products from another African country. And as Africans we realized the difficulty in sending or receiving another African currency, this is why we built MULA for you. 
                  </p>
                  <p>
                  MULA does your African transactions in simple steps that takes less than a minute at affordable rate.
                  </p>
              </div>
              
          </div>
          <div>
           <img src={receive} alt="Mula ecosystem" className=' mx-auto'   />
          </div>
        </div>
        
    </section>
  )
}

export default MakingTransferEasy