import React from 'react'
import DownloadAppSection from '../components/DownloadAppSection'
import FounderIntro from '../sections/home/FounderIntro'
import HeroSections from '../sections/home/HeroSections'
import IntroSection from '../sections/home/IntroSection'
import MulaAnimate from '../sections/home/MulaAnimate'
import VerticalCarousel from '../sections/home/VerticalCarousel'
import VerticalCarouselMobile from '../sections/home/VerticalCarouselMobile'
import WalletMore from '../sections/home/WalletMore'

function Home() {
   
  return (
    <>
    
    <HeroSections/>
    <IntroSection/>
    <VerticalCarousel/>
    <VerticalCarouselMobile/>
    <WalletMore/>
    <MulaAnimate/>
    <FounderIntro/>
    <DownloadAppSection/>
    </>
  )
}

export default Home