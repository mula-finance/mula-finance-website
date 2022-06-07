import React from 'react'
import mulaApp from "../../assets/img/more-features.png"
import {BsChevronCompactDown} from "react-icons/bs"

function MoreFeatures() {
  return (
    <section className='my-24'>

        <div className='mb-5 text-center justify-items-center items-center'>
            <h4 className='text-brand-secondary font-semibold mb-5 text-center'> MORE</h4>
            <h2 className='text-brand-primary md:text-4xl font-black mx-auto'>
            FEATURES
            </h2>
            <BsChevronCompactDown className='mx-auto text-brand-secondary text-4xl font-black'/>
        </div>

        <div className='md:grid md:grid-cols-4 bg-mula-bg-radiate  bg-contain bg-no-repeat bg-center m-10'>
            <div className='flex flex-col space-y-16 justify-evenly'>
                <div className='bg-brand-primary text-white rounded-2xl lg:p-10 p-5'>
                    <h4 className='font-medium lg:text-2xl'>WEB3 <span className='text-brand-secondary'>DAPPS</span></h4>
                    <p className='text-tiny'>Enjoy seamless multi-chain indexing across Bitcoin, Ethereum and Binance Smart Chain in all-in one streamlined environment.</p>
                </div>
                <div className='bg-brand-primary text-white rounded-2xl lg:p-10 p-5'>
                    <h4 className='font-medium lg:text-2xl'>WALLET <span className='text-brand-secondary'>CONNECT</span></h4>
                    <p className='text-tiny'>User private keys are completely encrypted and securely stored locally on your Mobile phone.</p>
                </div>
                <div className='bg-brand-primary text-white rounded-2xl lg:p-10 p-5'>
                    <h4 className='font-medium lg:text-2xl'>MULTI <span className='text-brand-secondary'>CURRENCY</span></h4>
                    <p className='text-tiny'>User private keys are completely encrypted and securely stored locally on your Mobile phone.</p>
                </div>
            </div>
            <div className='hidden md:inline md:col-span-2 col-span-auto items-center'>
                <img src={mulaApp} alt="mula wallet more features" className='max-w-md mx-auto' />
            </div>
            <div className='flex flex-col space-y-16 mt-2 justify-evenly'>
                <div className='bg-brand-primary text-white rounded-2xl lg:p-10 p-5'>
                    <h4 className='font-medium lg:text-2xl'>EVM <span className='text-brand-secondary'>COMPATIBLE</span></h4>
                    <p className='text-tiny'>Enjoy seamless multi-chain indexing across Bitcoin, Ethereum and Binance Smart Chain in all-in one streamlined environment.</p>
                </div>
                <div className='bg-brand-primary text-white rounded-2xl lg:p-10 p-5'>
                    <h4 className='font-medium lg:text-2xl'>COMPLETELY <span className='text-brand-secondary'>NON-CUSTODIAL</span></h4>
                    <p className='text-tiny'>User private keys are completely encrypted and securely stored locally on your Mobile phone.</p>
                </div>
                <div className='bg-brand-primary text-white rounded-2xl lg:p-10 p-5'>
                    <h4 className='font-medium lg:text-2xl'>CASSAVA <span className='text-brand-secondary'>PROTOCOL</span></h4>
                    <p className='text-tiny'>User private keys are completely encrypted and securely stored locally on your Mobile phone.</p>
                </div>
            </div>
        </div>
        
        

    </section>
  )
}

export default MoreFeatures