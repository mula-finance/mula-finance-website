import React, {useState} from 'react'
import thumbNail from "../../assets/img/black-video-thumbnail.jpg"
import VideoModal from '../../components/VideoModal'

function FounderIntro() {

  const [modalOn, setModalOn] = useState(false); 

  const clicked = () => {
    setModalOn(true)
  }
  return (
    <section className='m-5 mb-10 mt-20 md:m-10 item-center rounded-3xl pt-20 p-10 md:p-20 lg:bg-founder-vide-bg md:bg-repeat-round bg-no-repeat bg-contain bg-brand-primary justify-items-center'>
        <div className='text-white font-bold lg:text-4xl md:text-2xl text-center mb-20 text-tiny'>
            <h2>MULA FINANCE IS BRINGING THE AFRICAN <span className='md:hidden'><span className='text-brand-secondary'>COMMUNITY</span> TO YOUR FINGER TIPS</span></h2>
            <h2 className='hidden md:inline'><span className='text-brand-secondary'>COMMUNITY</span> TO YOUR FINGER TIPS</h2>
        </div>
        
        <img  onClick={clicked} src={thumbNail} alt="thumbnail" className='item-center mx-auto pb-50' />

        {modalOn && <VideoModal setModalOn={setModalOn}/>}
    </section>
  )
}

export default FounderIntro