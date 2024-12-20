import React, { useContext } from 'react'
import logo from "../assets/logo.png"
import search from "../assets/search_icon.png"
import profileIcon from "../assets/profile.png"
import cartIcon from "../assets/cart_icon.png"
import menuIcon from "../assets/menu_icon.png"
import backIcon from "../assets/back_icon.png"
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
const Navbar = () => {

  const [visible, setVisible] = useState(false);
  
  const {setShowSearch} = useContext(ShopContext);

  return (
    <div className = "flex items-center justify-between py-5 font-medium" >
      <Link to = "/"><img src={logo} className = "w-36" alt="" /></Link>
      <ul className = "hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to = "/" className= "flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to = "/collection" className= "flex flex-col items-center gap-1">
            <p>Collection</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to = "/contact" className= "flex flex-col items-center gap-1">
            <p>Contact</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
        </NavLink>
      </ul>

    <div className='flex items-center gap-6'>
      <img onClick ={() => setShowSearch(true)}src = {search} alt = "search" className='w-5 cursor-pointer'/>
      <div className='group relative'>
        <img src = {profileIcon}  alt = "profile" className='w-5 cursor-pointer'/>
        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
          <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
            <p className='cursor-pointer hover:text-black'>Profile</p>
            <p className='cursor-pointer hover:text-black'>Orders</p>
            <p className='cursor-pointer hover:text-black'>Logout</p>
          </div>
        </div>
      </div>
      <Link to ="/cart" className= "relative">
        <img src = {cartIcon} alt = "cart" className='w-5 min-w-5'/>
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>10</p>
      </Link>
      <img onClick = {() => setVisible(true)} src = {menuIcon} alt = "menu" className='w-5 cursor-pointer sm:hidden'/>
    </div>
    {/* side bar for phone screens */}
        <div className = {`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick = {() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img src = {backIcon} alt ="back" className='h-4 rotate-90'/>
            </div>
            <NavLink onClick = {() => setVisible(false)} className= "py-2 pl-6 border" to = "/">Home</NavLink>
            <NavLink onClick = {() => setVisible(false)} className= "py-2 pl-6 border" to = "/collection">Collection</NavLink>
            <NavLink onClick = {() => setVisible(false)} className= "py-2 pl-6 border" to = "/contact">Contact</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Navbar