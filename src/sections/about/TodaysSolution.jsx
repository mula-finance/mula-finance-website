import React from 'react'
import Button from '../../components/Button'
import ReactPlayer from "react-player/lazy"
import mula_app_video from "../../assets/img/mula-token-send-video.mp4"

function TodaysSolution() {
  return (
    <section className='  bg-brand-grey m-10  lg:pl-32 lg:pr-32  md:pr-10 md:pl-10  md:pt-10 rounded-3xl mb-10 mt-20  text-white pl-5 pt-5 pr-5'>
        <div className='  md:grid md:grid-cols-2 text-center md:text-left'>
            <div className='text-brand-primary     m-auto'>
                <div className='font-black lg:text-4xl md:text-2xl mb-2'>
                <h2>TODAY'S SOLUTION FOR <br /><span className='text-brand-secondary'>BORDERLESS TRANSACTION</span></h2>
                </div>
                <div className='lg:text-2xl mt-5   text-brand-primary text-tiny'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, mauris lacus sollicitudin lectus sit amet, consectetur adipiscing elit. Urna, mauris lacus sollicitudin lectus 
                    </p>
                </div>
                <Button>
                    DOWNLOAD MULA WALLET
                  </Button>
            </div>
            <div className='hidden  md:inline-block player-wrapper  mb-5'>
              <div className='w-5/12 m-auto'>
              <ReactPlayer
              autoPlay
                className='react-player'
                url={mula_app_video}
                width='100%'
                height='100%'
                loop={true}
                playing={true}
                config={{ file: { attributes: {
                  autoPlay: true,
                  muted: true
                }}}}

              />
              </div>
            </div>
        </div>
    </section>
  )
}

export default TodaysSolution