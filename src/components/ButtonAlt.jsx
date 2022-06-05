import React from 'react'

function ButtonAlt({children, onClick}) {
  return (
    <button className='bg-brand-secondary md:p-5 md:mt-10 p-3 mt-3 mb-3
    hover:bg-brand-primary text-white  transition-colors duration-300 
    '>
        {children}
    </button>
  )
}

export default ButtonAlt