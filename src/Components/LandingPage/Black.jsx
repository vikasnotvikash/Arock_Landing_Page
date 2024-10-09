import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'

const Black = () => {

    const blackRef = useRef(null)

    useGSAP(() => {
        gsap.to(blackRef.current, {
            y:"-100%",
            delay: 1.5,
            duration: 2,
            ease:"power2.out"
        })
    })

  return (
    <div ref={blackRef} className='h-screen bg-[#111] z-20 w-full absolute'></div>
  )
}

export default Black