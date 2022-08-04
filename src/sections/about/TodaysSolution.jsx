import React, {useState} from 'react'
import Button from '../../components/Button' 
import africa from "../../assets/img/connecting-africa.png"
import WaitListForm from "../../components/WaitListForm"
function TodaysSolution() {
  const [modalOn, setModalOn] = useState(false); 

    const clicked = () => {
      setModalOn(true)
    }
  return (
    <section className='bg-brand-grey m-5 mb-10 mt-20 md:m-10 lg:pl-32 lg:pr-32  md:pr-10 md:pl-10  md:pt-10 rounded-3xl   pl-5 pt-5 pr-5 text-white'>
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
                <Button onClick={clicked}>
                    DOWNLOAD MULA WALLET
                  </Button>
            </div>
            <div>
              <img src={africa} alt="Mula ecosystem" className=' mx-auto'   />
            </div>
        </div>
        {modalOn && <WaitListForm setModalOn={setModalOn}/>}
    </section>
  )
}

export default TodaysSolution