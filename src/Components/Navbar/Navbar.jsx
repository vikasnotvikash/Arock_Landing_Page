import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Navbar = (props) => {
  return (
    <div className='flex w-full items-center justify-between px-6 py-6'>
      <Logo />
      <Menu menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen}/>
    </div>
  )
}

export default Navbar