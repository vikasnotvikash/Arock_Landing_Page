import React from 'react'

const Menu = (props) => {

  const menubarOpens = () => {
    props.setmenuOpen(true)
  }

  console.log(props);
  return (
    <div onClick={menubarOpens} className='font-[a4] uppercase opacity-80 cursor-pointer hover:opacity-70 active:scale-95'>Menu</div>
  )
}

export default Menu