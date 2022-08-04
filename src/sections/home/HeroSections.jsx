import React, {useState} from 'react'
import {FaCheckCircle} from 'react-icons/fa'
import appStore from '../../assets/img/app-store.png'
import playStore from '../../assets/img/play-store.png'
import heroImg1 from "../../assets/img/mula-hero.png"
import TypedTexts from '../../components/TypedTexts'
import WaitListForm from '../../components/WaitListForm'
function HeroSections() {

    const [modalOn, setModalOn] = useState(false); 

    const clicked = () => {
      setModalOn(true)
    }
  return (
    <section className='items-center mt-26 xl:ml-20  '>
        <div className='md:grid md:grid-cols-2 md:pl-10'>
        <div className='flex items-center'>
            <div className=' text-left'>
                <div className='m-5 md:m-0 text-4xl md:text-7xl font-black text-brand-primary'>
                    <h1 className=''>
                    SEND MONEY</h1>
                    <h1 className=''>
                        <TypedTexts words={['ACROSS', 'TO','FROM']}/> AFRICA </h1>
                    <h1 className=''>IN LESS THAN A </h1>
                    <h1 className=''>MINUTE</h1>
                
                </div>
                <div className='mt-4 font-medium ml-5 md:ml-0'>
                    <ul className='mb-6 text-center md:text-left'>
                        <li className='flex items-center'> <FaCheckCircle className='text-brand-secondary mr-2 text-lg'/>DISTANCE IS NO BARRIER</li>
                        <li className='flex items-center md:hidden'> <FaCheckCircle className='text-brand-secondary mr-2 text-lg'/>MOVE YOUR MONEY FREELY</li>
                        <li className='items-center hidden lg:inline-flex'> <FaCheckCircle className='text-brand-secondary mr-2 text-lg'/>USE MULA WALLET FOR SWIFT AFRICAN TRANSACTIONS</li>
                    </ul>
                    <p className=''>GET THE MULA FINANCE MOBILE WALLET:</p>
                </div>
                <div className='md:grid md:grid-cols-4 mt-3 mx-auto grid grid-cols-2 px-5 md:px-0'>
                    <img src={appStore} alt="download mula app on app store" onClick={clicked} className=" cursor-pointer" />
                    <img src={playStore} alt="download mula app on play store" onClick={clicked} className=" cursor-pointer"/>
                </div>
            </div>
            
        </div>
        <div className="justify-center hidden xl:inline lg:inline md:inline">
            <img src={heroImg1} alt="Mula finance african transaction" className='mt-3'/>
        </div>
        </div>
        {modalOn && <WaitListForm setModalOn={setModalOn}/>}
    </section>
  )
}

export default HeroSections