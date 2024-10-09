import React from 'react'
import MenuClose from './MenuClose'

const MenuRight = (props) => {
  return (
    <div className='px-[3.5vw] py-[2vw] relative'>
        <MenuClose menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen} />
    </div>
  )
}

export default MenuRight