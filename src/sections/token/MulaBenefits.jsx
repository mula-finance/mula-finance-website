import React from 'react'
import {BsChevronCompactDown} from "react-icons/bs"
import {GiKey,GiTakeMyMoney,} from "react-icons/gi"
import {RiSecurePaymentFill} from "react-icons/ri"
import  {FaBolt} from "react-icons/fa"
 

function MulaBenefits() {
  return (
    <section className='my-20'>

      <div className='mb-5 text-center justify-items-center items-center'>
        <h4 className='text-brand-secondary font-semibold mb-5 text-center'> BENEFITS</h4>
        <h2 className='text-brand-primary md:text-4xl font-black mx-auto'>
          MULA TOKEN
        </h2>
        <BsChevronCompactDown className='mx-auto text-brand-secondary text-4xl font-black'/>
      </div>

      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-4 ">
        <div className='grid lg:grid-cols-4   md:grid-cols-2  text-center justify-center items-center'>
      {/* rounded-2xl border-r-brand-primary border-4  */}
        <div className='py-9 hover:shadow-xl hover:rounded-xl transition ease-in-out  hover:-translate-y-1 duration-500'>
          <div className='bg-brand-primary w-fit p-5 rounded-xl mx-auto my-5'>
            <FaBolt className='text-brand-secondary text-6xl font-black mx-auto'/>
          </div>
          <h4 className='font-semibold md:text-base mb-5 text-center'>SUPER FAST<br/>TRANSACTIONS</h4>
        </div>
        <div className='py-9 hover:shadow-xl hover:rounded-xl transition ease-in-out  hover:-translate-y-1 duration-500'>
          <div className='bg-brand-primary w-fit p-5 rounded-xl mx-auto my-5'>
            <GiTakeMyMoney className='text-brand-secondary text-6xl font-black mx-auto'/>
          </div>
          <h4 className='font-semibold md:text-sm mb-5 text-center'>LOW COST <br/>CROSS-BORDER PAYMENT</h4>
        </div>
        {/* <div className='py-9'>
          <div className='bg-brand-primary w-fit p-5 rounded-xl mx-auto my-5'>
            <HiDocumentSearch className='text-brand-secondary text-6xl font-black mx-auto'/>
          </div>
            
          <h4 className='font-semibold mb-5 text-center'>TRANSPARENT <br/>TRANSACTIONS</h4>
        </div> */}
        <div className='py-9 hover:shadow-xl hover:rounded-xl transition ease-in-out  hover:-translate-y-1 duration-500'>
          <div className='bg-brand-primary w-fit p-5 rounded-xl mx-auto my-5'>
            <RiSecurePaymentFill className='text-brand-secondary text-6xl font-black mx-auto'/>
          </div>
            
          <h4 className='font-semibold mb-5 text-center'>SECURE <br/>TRANSACTIONS</h4>
        </div>
        <div className='py-9 hover:shadow-xl hover:rounded-xl transition ease-in-out  hover:-translate-y-1 duration-500'>
          <div className='bg-brand-primary w-fit p-5 rounded-xl mx-auto my-5'>
            <GiKey className='text-brand-secondary text-6xl font-black mx-auto'/>
          </div>
            
          <h4 className='font-semibold mb-5 text-center'>ACCESS TO THE MULA <br/>CASSAVA PROTOCOL</h4>
        </div>
      </div>
        </div> 
      </div>
      
      
      
      

    </section>
  )
}

export default MulaBenefits