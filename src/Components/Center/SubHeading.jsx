import React from 'react'
import 'remixicon/fonts/remixicon.css'

const SubHeading = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-1.5 text-sm'>
        <i className="ri-play-circle-line"></i>
        <h3 className='uppercase'>Play <br /> <span className='-ml-5'>The film</span></h3>
      </div>
      <div className='flex gap-20 text-sm font-[a4] uppercase ml-5'>
        <h3>Create <br /> Curator</h3>
        <h3>New York <br />Los Angeles</h3>
      </div>
    </div>
  )
}

export default SubHeading