import React from 'react'
import mulaShowcase from "../../assets/img/mula-showcase.png"
import {SiEthereum,SiBinance} from 'react-icons/si'
import {BsCurrencyBitcoin} from 'react-icons/bs'
import {TbFaceId} from 'react-icons/tb'
import {RiLockPasswordFill} from 'react-icons/ri'
import {BiScan} from 'react-icons/bi'

function ShowCase1() {
  return (
    <section className='m-5 p-5 lg:grid lg:grid-cols-3 bg-brand-grey lg:pt-20 lg:pl-20 lg:pr-20  pt-3 pb-3  pl-3   rounded-3xl   text-white'>
        <div className='text-brand-primary rounded-3xl m-auto'>
          <div className='flex mt-10 gap-2 md:text-6xl font-black'>
              <div className='bg-brand-primary w-fit p-5 rounded-xl mx-auto my-5 '>
                <SiEthereum className='text-brand-secondary  '/>
              </div>
              <div className='bg-brand-primary w-fit p-5 rounded-xl mx-auto my-5'>
                <BsCurrencyBitcoin className='text-brand-secondary '/>
              </div>
              <div className='bg-brand-primary w-fit p-5 rounded-xl mx-auto my-5'>
                <SiBinance className='text-brand-secondary  '/>
              </div>
          </div>
          <div className='font-black md:text-3xl text-center  mb-8'>
              <h2>SUPPORT FOR POPULAR <span className='text-brand-secondary'>BLOCKCHAINS</span></h2>
          </div>
          <div className='text-center md:text-2xl mb-15'>
              <p className='m-5'>
              Mula wallet makes it easy for users to buy, hold and transact on the bitcoin blockchain, Ethereum blockchain and Binance Smart Chain. <br/> Many more blockchains will be added soon.
              </p>
          </div>
        </div>
        <div>
          <img src={mulaShowcase} alt="mula show case app" />
        </div>
        <div className='text-brand-primary rounded-3xl m-auto'>
        <div className='flex mt-10 gap-2 md:text-6xl font-black'>
              <div className='bg-brand-primary w-fit p-5 rounded-xl mx-auto my-5'>
                <BiScan className='text-brand-secondary'/>
              </div>
              <div className='bg-brand-primary w-fit p-5 rounded-xl mx-auto my-5'>
                <RiLockPasswordFill className='text-brand-secondary '/>
              </div>
              <div className='bg-brand-primary w-fit p-5 rounded-xl mx-auto my-5'>
                <TbFaceId className='text-brand-secondary'/>
              </div>
          </div>

            <div className='font-black md:text-3xl text-center  mb-8'>
              <h2>YOUR <span className='text-brand-secondary'>FUND</span> IS YOUR <span className='text-brand-secondary'>FUND</span></h2>
            </div>
            <div className='md:text-2xl text-center mb-15'>
                <p className='m-5'>
                Mula wallet is completely Non-custodial. Your private keys are completely encrypted and securely stored locally on your mobile phone.</p>
                <p className='mb-5'>Secured with passcode generation and biometric security.
                </p>
            </div>
        </div>
    </section>
  )
}

export default ShowCase1