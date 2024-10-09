import React, { useRef } from 'react'
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'
import gsap from 'gsap/all'
import { useGSAP } from '@gsap/react'

const MenuPage = (props) => {

  const menu = useRef(null)

  useGSAP(() => {
    if(props.menuOpen)
    {
      gsap.to(menu.current, {
        top:0
      })
    }
    else
    {
      gsap.to(menu.current, {
        top:"100%"
      })  
    }
  },[props.menuOpen])

  return (
    <div ref={menu} className='fixed h-screen w-full bg-[linear-gradient(#1A1A1A,#1A1A1A)] top-full z-20'>
        <MenuRight menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen}/>
        <MenuLeft />
    </div>
  )
}

export default MenuPage