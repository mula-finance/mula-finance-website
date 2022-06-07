import React from 'react'
import {FaCheckCircle} from 'react-icons/fa'
import appStore from '../../assets/img/app-store.png'
import playStore from '../../assets/img/play-store.png'
import heroImg1 from "../../assets/img/mula-hero.png"
import TypedTexts from '../../components/TypedTexts'
function HeroSections() {
  return (
    <section className='items-center mt-26 xl:ml-20  '>
        <div className='md:grid md:grid-cols-2 md:pl-10'>
        <div className='flex items-center'>
            <div className='text-center md:text-left'>
                <div className='  text-4xl xl:text-7xl font-black text-brand-primary'>
                    <h1 className=''>
                    SEND MONEY</h1>
                    <h1 className=''>
                        <TypedTexts words={['ACROSS', 'TO','FROM']}/> AFRICA </h1>
                    <h1 className=''>IN LESS THAN A </h1>
                    <h1 className=''>MINUTE</h1>
                
                </div>
                <div className='mt-4 font-medium ml-10 md:ml-0'>
                    <ul className='mb-6 text-center md:text-left'>
                        <li className='flex items-center'> <FaCheckCircle className='text-brand-secondary mr-2 text-lg'/>DISTANCE IS NO BARRIER</li>
                        <li className='items-center hidden lg:inline-flex'> <FaCheckCircle className='text-brand-secondary mr-2 text-lg'/>USE MULA WALLET FOR SWIFT AFRICAN TRANSACTIONS</li>
                    </ul>
                    <p className=''>GET THE MULA FINANCE MOBILE WALLET:</p>
                </div>
                <div className='md:grid md:grid-cols-4 mt-3 mx-auto grid grid-cols-2 px-7 md:px-0'>
                    <img className="" src={appStore} alt="download mula app on app store" />
                    <img src={playStore} alt="download mula app on play store" />
                </div>
            </div>
            
        </div>
        <div className="justify-center hidden xl:inline lg:inline md:inline">
            <img src={heroImg1} alt="Mula finance african transaction" className='mt-3'/>
        </div>
        </div>
        
    </section>
  )
}

export default HeroSections