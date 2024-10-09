// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import React, { useRef } from 'react'
// import './App.css';

// const App = () => {

//   const boxRef = useRef()
//   const circle = useRef()

//   useGSAP(function() {
//     gsap.to(boxRef.current, {
//       x:1000,
//       duration:5,
//       delay:1,
//       rotate:360,
//       backgroundColor:"purple"
//     })
//   })
//   useGSAP(function () {
//      gsap.to(circle.current, {
//       x:1000,
//       duration:3,
//       repeat: -1,
//       yoyo: true,
//       backgroundColor:"green"
//     })
//   })

//   // useGSAP(function() {
//   //   gsap.to('.box', {
//   //     x:1000
//   //   })
//   // })

//   return (
//     <div>
//       <div ref={boxRef} className="box"></div>
//       <div ref={circle} className="circle"></div>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Searchbox from './Components/Searchbox'
// import Infobox from './Components/Infobox'
// import WeatherApp from './Components/WeatherApp'

// const App = () => {
//   return (
//     <>
//       {/* <h1>Material UI button</h1>
//       <Button variant="outlined">Click me !</Button>
//       <br /> <br /> <br />
//       <Button variant="contained"  color="error"> Disabled </Button>
//       <br /> <br /> <br />
//       <Button variant="outlined" startIcon={<DeleteIcon />}>
//         Delete
//       </Button> */}
//       <WeatherApp />
//       {/* <Searchbox />
//       <Infobox /> */}
//     </>
//   )
// }

// export default App




// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap/all'
// import React, { useRef, useState } from 'react'
// import './App.css';


// const App = () => {


//   const [Xmove, setXmove] = useState(0)
//   const [Rotate, setRotating] = useState(0)
//   const boxRef = useRef(null)
//   var random = gsap.utils.random(-500,500,1)

//   useGSAP(() => {
//     gsap.to(boxRef.current, {
//       x:Xmove,
//     })
//   },[Xmove])

//   useGSAP(()=> {
//     gsap.to(boxRef.current, {
//       x:Xmove,
//       rotate:Rotate,
//       duration:0.8,
//       ease:"back"
//     })
//   },[Xmove, Rotate])



//   return (
//     <main>
//       <button onClick={() => {setXmove(random) ,setRotating(random)}}>click me</button>
//       <div ref={boxRef} className="box"></div>
//     </main>
//   )
// }

// export default App
//   return (
//     <main>
//       <button onClick={() => {setXmove(random)}} >click me</button>
//       <div ref={boxRef} className="box"></div>
//     </main>
//   )
// }

// export default App




// import gsap from 'gsap/all'
// import React, { useRef, useState } from 'react'
// import './App.css';
// import { useGSAP } from '@gsap/react';

// const App = () => {

//   const {contextSafe} = useGSAP()

//   const jackref = useRef(null)
//   const cockref = useRef(null)

//   var Xrandom = gsap.utils.random(-1000, 1000, 100)
//   var Yrandom = gsap.utils.random(-600, 600, 100)

//   const [Xmove, setXmove] = useState(0)
//   const [Ymove, setYmove] = useState(0)

//   useGSAP(()=> {
//     gsap.to(cockref.current, {
//       x:Xmove,
//       y:Ymove,
//       duration:1
//     })
//   },[Xmove, Ymove])

//   const move = (e) => {
//     gsap.to(jackref.current, {
//       x:e.clientX - 1600,
//       y:e.clientY - 900
//     })
//   }
//   return (
//       <main onMouseMove={(e)=> {
//         move(e)
//       }}>
//         <img className='jack' ref={jackref} src='../src/assets/download-removebg-preview.png' />
//         <img onClick={() => {
//           setXmove(Xrandom)
//           setYmove(Yrandom)
//         }} ref={cockref} src="src/assets/OIP-removebg-preview.png" alt=""  className='cock'/>
//       </main>
//   )
// }

// export default App



import React, { useState } from 'react'
import LoadParent from './Components/Loading/LoadParent'
import Home from './Components/LandingPage/Home'
import MenuPage from './Components/Menu/MenuPage'

const App = () => {

  const [menuOpen, setmenuOpen] = useState(false)


  return (
    <div className='h-screen bg-[#111] overflow-hidden'>
      <MenuPage menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <LoadParent />
      <Home menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
    </div>
  )
}

export default App