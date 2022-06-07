import React from 'react'

function Button({children, onClick}) {
  return (
    <button className='bg-brand-primary md:p-5 md:mt-10 p-3 mt-3 mb-3 tex-tiny
    hover:bg-brand-secondary text-white transition-colors duration-300
    '>
        {children}
    </button>
  )
}

export default Button