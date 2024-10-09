import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import React, { useRef } from 'react'

const HeroText = () => {

  const TextRef = useRef(null)

   useGSAP(() => {
    let clutter = ""
    const splittedText = TextRef.current.textContent.split("")

    splittedText.forEach((e) => {
      clutter += `<span>${e}</span>`
    })
    TextRef.current.innerHTML = clutter;

    gsap.from("h1 span", {
      y:100,
      opacity:0,
      delay:2.5,
      stagger:0.12
    })
   })

  return (
    <div>
      <h1 ref={TextRef} className='whitespace-nowrap font-black uppercase text-[20vw] font-[u7] leading-[17vw] text-center'>
        Arock
      </h1>
    </div>
  )
}

export default HeroText