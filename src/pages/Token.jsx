import React from 'react'
import TokenHero from '../sections/token/TokenHero'
import WhyMulaToken from '../sections/token/WhyMulaToken'
import MulaBenefits from '../sections/token/MulaBenefits'
import MulaSupply from '../sections/token/MulaSupply'
import HowToBuy from '../sections/token/HowToBuy'
import Disclaimer from '../sections/token/Disclaimer'

function Token() {
  return (
    <>
    <TokenHero/>
    <WhyMulaToken/>
    <MulaBenefits/>
    <MulaSupply/>
    {/* <HowToBuy/> */}
    <Disclaimer/>
    </>
  )
}

export default Token