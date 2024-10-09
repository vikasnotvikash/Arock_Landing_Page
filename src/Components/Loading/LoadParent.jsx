import React from 'react'
import LoadChild from './LoadChild'

const LoadParent = () => {
  return (
    <div className='h-1 fixed w-full bg-transparent rounded-full z-50'>
        <LoadChild />
    </div>
  )
}

export default LoadParent