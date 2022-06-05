import React from 'react'
import MoreThanJustAWallet from '../sections/wallet/MoreThanJustAWallet'
import SendAndConnect from '../sections/wallet/SendAndConnect'
import ShowCase1 from '../sections/wallet/ShowCase1'
import WalletHero from '../sections/wallet/WalletHero'
import DownloadAppSection from "../components/DownloadAppSection"
import MoreFeatures from '../sections/wallet/MoreFeatures'

function Wallet() {
  return (
    <>
    <WalletHero/>
    <ShowCase1/>
    <SendAndConnect/>
    <MoreThanJustAWallet/>
    <MoreFeatures/>
    <DownloadAppSection/>
    
    </>
  )
}

export default Wallet