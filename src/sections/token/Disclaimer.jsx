import React from 'react'
import hashex from "../../assets/img/Hashex.png"
import apeswap from "../../assets/img/Apeswap.png"
function Disclaimer() {
  return (
    <section className=' bg-brand-grey m-5 md:m-10  md:pb-20 md:pt-20 md:pl-20 md:pr-20 rounded-3xl my-24 text-brand-primary'>
       
      <div className='p-5 font-medium md:text-2xl mt-6 text-center'>
        <p className='mb-6'>
        Note that digital currencies can be volatile and buying them can be risky. <br/>While MULA will always have utilities, the price of MULA denominated in fiat currency may change, and you could lose significant value.
        </p>

        <div className='flex mt-10'>
        <img src={hashex} alt="mula audited by hashex"  className='mx-auto md:w-1/4 md:h-fit w-28'/>
        <img src={apeswap} alt="mula audited by hashex"  className='mx-auto md:w-1/4 md:h-fit w-36'/>
        </div>
      </div>
    </section>
  )
}

export default Disclaimer