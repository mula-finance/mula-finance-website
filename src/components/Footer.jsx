import React from 'react'
import { Link } from 'react-router-dom'
import {FaTelegramPlane, FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"
import ButtonInverse from './ButtonInverse'
import Logo from '../assets/img/logo.png'
import appStore from '../assets/img/app-store.png'
import playStore from '../assets/img/play-store.png'

function Footer() {
  return (
    <footer className='bg-brand-primary text-white'>
         <div className="max-w-7xl container m-auto py-10">
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2">
                <div className="">
                    <Link to="/">
                        <img src={Logo} alt="mula finance logo" className='w-8/12'/>
                    </Link>
                    <h4 className='my-4 font-medium text-lg'>Mula Finance leverages the use of the blockchain technology and the integration of existing financial systems to offer an African-wide, cross boarder money transfer and remittance solution.</h4>
                    <ButtonInverse>DOWNLOAD MULA WALLET</ButtonInverse>
                </div> 
                <div className="md:ml-10 items-center ">
                    <h2 className='font-black text-2xl mt-5'>Quick Links</h2>
                    <div class="flex flex-col  space-y-4 mt-5">
                        <Link to="/" className='hover:text-brand-secondary cursor-pointer'>Home</Link>
                        <Link to="/wallet" className='hover:text-brand-secondary cursor-pointer'>Mula Wallet</Link>
                        <Link to="/token" className='hover:text-brand-secondary cursor-pointer'>Mula Token</Link>
                        <Link to="/about" className='hover:text-brand-secondary cursor-pointer'>About</Link>
                        <a href="https://mulafinance.medium.com/" className='hover:text-brand-secondary cursor-pointer'>Blog</a>
                    </div>
                </div>  
                <div className="md:ml-10 items-center ">
                    <h2 className='font-black text-2xl mt-5'>Get The Wallet</h2>
                    <h4 className='my-4 font-medium text-lg'>Express yourself in each payment. The Mula wallet allows you easily connect with the people you love. Easily send money to your loved one just as you chat with them.</h4>
                    <div className='md:grid md:grid-cols-3 mt-3 grid grid-cols-2'>
                        <img src={appStore} alt="download mula app on app store"  className=''/>
                        <img src={playStore} alt="download mula app on play store" />
                    </div>
                    <div class="flex gap-5 mt-5">
                        <a href='https://www.facebook.com/mula.finance.official' className='text-xl hover:text-brand-secondary'><FaFacebookF/></a> 
                        <a href='https://twitter.com/mulafinance' className='text-xl hover:text-brand-secondary'><FaTwitter/></a>
                        <a href='https://www.instagram.com/mula.finance.official/' className='text-xl hover:text-brand-secondary'><FaInstagram/></a>
                        <a href='https://www.youtube.com/channel/UCpyHqmpYdy5NaWrNBdNgj-g' className='text-xl hover:text-brand-secondary'><FaYoutube/></a>
                        <a href='https://t.me/mulafinance' className='text-xl hover:text-brand-secondary'><FaTelegramPlane/></a>
                    </div>
                </div>      

            </div>
         </div>
    </footer>
  )
}

export default Footer