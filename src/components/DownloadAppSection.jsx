import React from 'react'
import mulaphones from '../assets/img/mula-multiple.png'
import appStore from '../assets/img/app-store.png'
import playStore from '../assets/img/play-store.png'

function DownloadAppSection() {
  return (
    <div className='bg-brand-grey pt-20 lg:pl-32 lg:pr-32 md:pl-10 md:pr-10 p-3 rounded-3xl mb-10 mt-20 text-white md:text-justify text-center mx-auto items-center justify-center' >
        <div className='md:grid md:grid-cols-2'>
            <div className='md:order-first -order-last'>
                <img className='w-full' src={mulaphones} alt="kkk"  />
            </div>
            <div className='m-auto'>
                <div className='font-bold lg:text-4xl text-2xl sm:text-xl'>
                    <h2 className='text-brand-primary'>DOWNLOAD</h2>
                    <h2 className='text-brand-secondary '>MULA WALLET</h2>
                </div>
                <p className='lg:text-2xl mt-5 text-brand-primary text-tiny'>
                    Express yourself in each payment. The Mula wallet allows you easily connect with the people you love.<br/> Easily send money to your loved one just as you chat with them.
                </p>
                <div className='md:grid md:grid-cols-3 mt-3 grid grid-cols-2'>
                    <img src={appStore} alt="download mula app on app store"  className=''/>
                    <img src={playStore} alt="download mula app on play store" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownloadAppSection