import React, {useRef, useState} from 'react'
import {FaRegWindowClose} from "react-icons/fa"
import {IoIosRocket} from "react-icons/io"
import emailjs from '@emailjs/browser'
import Button from './Button'
function WaitListForm({ setModalOn }) { 
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(false)
    const [muteButton, setMuteButton] = useState(false)
    const emailInput = useRef("");
    const handleCloseClick = () => { 
        setModalOn(false)
    }
    const addToWaitList = ()=>{
        if (!isValidEmail(emailInput.current.value)) {
            setError('Not a valid E-mail. Try again.');
            
        } else {
            console.log(emailInput.current.value)
            setError(null);
            setMuteButton(true)
            emailjs.init('xvH7AuYoVT8jjv6kt');

            var templateParams = {
                from_email: emailInput.current.value, 
            };
             
            emailjs.send('service_4fgkjv8', 'template_qy2m05i', templateParams)
                .then(function(response) {
                   setStatus(true)
                   setMuteButton(false)
                }, function(error) {
                    setMuteButton(false)
                   console.log('FAILED...', error);
                });
        }


    }


  
    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
  
   
  return (
    <div className=' bg-black bg-opacity-95 fixed inset-0 z-auto'>
        <div className="flex h-screen justify-center items-center">
            <div className='flex flex-col justify-center '>
            <div className='mb-14'>
                    <FaRegWindowClose className='text-brand-secondary  float-right cursor-pointer' onClick={handleCloseClick} />
            </div>

            <div className="m-5">
            <div className="text-brand-primary text-center  bg-white rounded-xl p-5 ">
                <div className='md:m-20 '>
                <div className='bg-brand-secondary w-fit p-5 rounded-2xl text-2xl mx-auto m-10 '>
                            <IoIosRocket className='lg:text-5xl text-2xl text-white'/>          
                        </div>
                   {status && 
                   <div>
                        <h2 className='md:text-4xl text-2xl font-black mb-5'> CONGRATULATIONS! </h2>
                        <h4 className='md:text-2xl font-black'>YOU ARE ON THE <span className='text-brand-secondary'>WAITING</span> LIST.</h4>
                    </div>}
                    {!status && 
                    <div>
                        
                        <h2 className='md:text-4xl text-2xl font-black mb-5'> WE ARE <span className='text-brand-secondary'>LAUNCHING</span> SOON</h2>
                        <h4 className='md:text-2xl font-black'>BE THE FIRST TO KNOW WHEN WE LAUNCH.</h4>
                        <div class=" w-11/12 md:w-3/5 mx-auto mt-10 mb-5">
                            <input type="email" ref={emailInput} name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-brand-secondary   focus:outline-none   block w-full rounded-md sm:text-sm focus:ring-1" placeholder="EMAIL" />
                            {error && <h2 style={{color: 'red'}} className="m-3">{error}</h2>}
                        </div>
                        <Button onClick={addToWaitList} disabled={muteButton}>
                            NOTIFY ME
                        </Button>
                    </div>}
                    
                    
                </div>
            </div>
            </div>
                
            </div>
        </div>
    </div>
  )
}

export default WaitListForm