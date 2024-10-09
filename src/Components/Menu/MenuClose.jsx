import React from 'react'

const MenuClose = (props) => {

    const menuBarCloses = () => {
        props.setmenuOpen(false)
    }
  return (
    <div onClick={menuBarCloses} className='uppercase font-[a4] cursor-pointer text-right hover:opacity-70 active:scale-y-95'>
        Close
    </div>
  )
}

export default MenuClose