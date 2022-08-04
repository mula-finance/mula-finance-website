import React from 'react'
import ReactPlayer from "react-player/youtube" 
import {FaRegWindowClose} from "react-icons/fa"
function VideoModal({ setModalOn }) {
     
    const handleCloseClick = () => { 
        setModalOn(false)
    }
  return (
    <div className=' bg-black bg-opacity-95 fixed inset-0 z-auto'>
        
        <div className="flex h-screen justify-center items-center">
            
            <div className='flex flex-col justify-center rounded-xl'>
                <div className='mb-14'>
                    <FaRegWindowClose className='text-brand-secondary  float-right cursor-pointer' onClick={handleCloseClick} />
                </div>
                <div className='md:hidden'>
                    <ReactPlayer  className='react-player' url='https://www.youtube.com/watch?v=ysz5S6PUM-U'  width='100%'height='100%' />
                </div>
                <div className='hidden md:inline-block'>
                    <ReactPlayer  className='react-player' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default VideoModal