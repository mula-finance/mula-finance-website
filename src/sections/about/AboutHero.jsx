import React, {useState} from 'react'
import Button from '../../components/Button'
import WaitListForm from "../../components/WaitListForm"
function AboutHero() {
  const [modalOn, setModalOn] = useState(false); 

    const clicked = () => {
      setModalOn(true)
    }
  return (
    <section className='items-center md:my-16 justify-items-center justify-center'>
      <div className='font-black text-2xl md:text-4xl items-center  text-center text-brand-primary mb-8'>
          <h2>MADE BY AFRICANS FOR <span className='text-brand-secondary'>AFRICA</span></h2>
      </div>
      <div className='text-center md:w-2/4 md:text-2xl text-lg  text-brand-primary mx-auto mb-15 px-5'>
          <p className='  mx-auto'>Whether you are sending or spending a Rand, Cedi, Naira, CFA Franc, Kwanza or Pound, MULA is here to make African transactions easy, fast & smooth.</p>
      </div>
      <div className='justify-center flex'>
        <Button className="mx-auto" onClick={clicked}>
          DOWNLOAD MULA WALLET
        </Button>
      </div>
      {modalOn && <WaitListForm setModalOn={setModalOn}/>}
    </section>
  )
}

export default AboutHero