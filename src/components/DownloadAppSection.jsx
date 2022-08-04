import React,{useState} from 'react'
import mulaphones from '../assets/img/mula-multiple.png'
import appStore from '../assets/img/app-store.png'
import playStore from '../assets/img/play-store.png'
import WaitListForm from './WaitListForm'

function DownloadAppSection() {
    const [modalOn, setModalOn] = useState(false); 

    const clicked = () => {
      setModalOn(true)
    }
  return (
    <div className=' bg-brand-grey m-5 mb-10 mt-20 md:m-10 lg:pl-32 lg:pr-32  md:pr-10 md:pl-10  md:pt-10 rounded-3xl   pl-5 pt-5 pr-5 text-white md:text-justify text-center items-center justify-center' >
        <div className='md:grid md:grid-cols-2'>
            <div className='md:order-first -order-last'>
                <img className='w-full' src={mulaphones} alt="kkk"  />
            </div>
            <div className='m-auto'>
                <div className='font-bold lg:text-4xl text-2xl sm:text-xl'>
                    <h2 className='text-brand-primary'>DOWNLOAD</h2>
                    <h2 className='text-brand-secondary '>MULA WALLET</h2>
                </div>
                <p className='lg:text-2xl mt-5 text-brand-primary'>
                    Express yourself in each payment. The Mula wallet allows you easily connect with the people you love.<br/> Easily send money to your loved ones just as you chat with them.
                </p>
                <div className='md:grid md:grid-cols-3 mt-3 grid grid-cols-2'>
                    <img src={appStore} alt="download mula app on app store"  onClick={clicked} className=" cursor-pointer"/>
                    <img src={playStore} alt="download mula app on play store" onClick={clicked} className=" cursor-pointer" />
                </div>
            </div>
        </div>
        {modalOn && <WaitListForm setModalOn={setModalOn}/>}
    </div>
  )
}

export default DownloadAppSection