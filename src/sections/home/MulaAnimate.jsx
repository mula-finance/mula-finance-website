import React from 'react'
import ReactPlayer from "react-player/lazy"
import animationVid from "../../assets/img/video.mp4"

function MulaAnimate() {

  return (
    <section className=' hidden md:inline-block rounded-xl m-5 mb-10 mt-20 md:m-10'>
        <div className='player-wrapper rounded-4l'>
        <ReactPlayer
        autoPlay
          className='react-player'
          url={animationVid}
          width='100%'
          height='100%'
          loop={true}
          playing={true}
          config={{ file: { attributes: {
            autoPlay: true,
            muted: true,
            playsInline:true
          }}}}
        />
      </div>
    </section>
  )
}

export default MulaAnimate