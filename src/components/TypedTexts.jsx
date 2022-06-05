import React, { useEffect } from 'react'
import Typed  from 'typed.js';

function TypedTexts({words}) { 
	const el = React.useRef(null); 
    const typed = React.useRef(null);
    useEffect(()=>{
        const options = {
            strings: words,
          typeSpeed: 50,
          backSpeed: 50,
          loop:true
        };
        typed.current = new Typed(el.current, options);
        
        return () => {
          typed.current.destroy();
        }
    })
  
    
   
  return (
    <span className="text-brand-secondary" ref={el} />
  )
}

export default TypedTexts
 