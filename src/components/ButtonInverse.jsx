import React from 'react'

function ButtonInverse({children, onClick}) {
  return (
    <button className='bg-brand-secondary md:p-5 md:mt-10 p-3 mt-3 mb-3
    hover:bg-white text-white hover:text-brand-secondary transition-colors duration-300 
    '>
        {children}
    </button>
  )
}

export default ButtonInverse