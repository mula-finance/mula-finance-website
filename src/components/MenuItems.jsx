import React from 'react'
import { Link } from 'react-router-dom'
import {GrFormClose} from "react-icons/gr"
function MenuItems({showMenu,status}) {
  console.log(status)
  return (
    <div>
      
    <ul className={` ${status ? '' : 'hidden' } flex-col flex items-center  left-1/4 fixed  bg-white justify-center inset-0 gap-6`}>
          <div onClick={()=>showMenu()} className='text-3xl cursor-pointer text-brand-primary'>
            {(status) ? <GrFormClose/> : ""}
          </div>
          <li onClick={()=>showMenu()}><Link to="/" id='home' className='  hover:text-brand-secondary hover:font-bold hover:underline-offset-4'> Home</Link></li>
          <li onClick={()=>showMenu()} ><Link to="/wallet" className='  hover:text-brand-secondary hover:font-bold'> Mula Wallet</Link></li>
          <li onClick={()=>showMenu()}><Link to="/token" className='  hover:text-brand-secondary hover:font-bold'> Mula Token</Link></li>
          <li onClick={()=>showMenu()}><Link to="/about" className='  hover:text-brand-secondary hover:font-bold'> About</Link></li>
          <li onClick={()=>showMenu()}><Link to="/" className='  hover:text-brand-secondary hover:font-bold'> Blog </Link></li>
    </ul>
    </div>
  )
}

export default MenuItems