import React from 'react'
import AboutHero from "../sections/about/AboutHero"
import MakingTransferEasy from '../sections/about/MakingTransferEasy'
import EasySend from '../sections/about/EasySend'
import TodaysSolution from "../sections/about/TodaysSolution"
import DownloadAppSection from '../components/DownloadAppSection'

function About() {
  return (
    <>
    <AboutHero/>
    <MakingTransferEasy/>
    <EasySend/>
    <TodaysSolution/>
    <DownloadAppSection/>
    </>
  )
}

export default About