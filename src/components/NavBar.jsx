import React ,{useState, useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom'
import Logo from '../assets/img/logo-alt-1.png'
import {GiHamburgerMenu} from "react-icons/gi"

import MenuItems from "../components/MenuItems" 




function NavBar() {
  let [open,setOpen]=useState(false); 
  let [path,setPath]=useState(false);
  const location = useLocation(); 
  const showMenu = ()=>{
    setOpen(!open)
  }
   
  const  isPath = (path)=> {
    let pathname = window.location.pathname
    let result = (path === pathname) ? true : false

    return result
  }

  useEffect(()=>{
    console.log(location)
    setPath(true)
  },[location])

  
  
  return (
    <div className='py-8 flex items-center'>
        <div className='flex xl:w-72 xl:mr-32 w-1/2 pl-10'> 
            <Link to="/">
              <img src={Logo} alt="mula finance logo" className=''/>
            </Link>
            
        </div>
        <div onClick={()=>showMenu()} className='flex xl:hidden text-3xl absolute right-8  cursor-pointer '>
            {(!open)?<GiHamburgerMenu/> :" "}
          </div>
        <nav >
        
          <ul className="hidden xl:flex  gap-6 ">
                <li><Link to="/" id='home' className={ `${(isPath('/')) ? 'text-brand-secondary' : 'text-brand-primary'} hover:text-brand-secondary   hover:underline-offset-4`}> Home</Link></li>
                <li><Link to="/wallet" className={ `${(isPath('/wallet')) ? 'text-brand-secondary' : 'text-brand-primary'} hover:text-brand-secondary   hover:underline-offset-4`}> Mula Wallet</Link></li>
                <li><Link to="/token" className={ `${(isPath('/token')) ? 'text-brand-secondary' : 'text-brand-primary'} hover:text-brand-secondary   hover:underline-offset-4`}> Mula Token</Link></li>
                <li><Link to="/about" className={ `${(isPath('/about')) ? 'text-brand-secondary' : 'text-brand-primary'} hover:text-brand-secondary   hover:underline-offset-4`}> About</Link></li>
                <li><a href="https://mulafinance.medium.com/" className='  hover:text-brand-secondary  '> Blog</a></li>
          </ul>
          <MenuItems showMenu={showMenu} status={open}/>
          
        </nav>
    </div>
  )
}

export default NavBar