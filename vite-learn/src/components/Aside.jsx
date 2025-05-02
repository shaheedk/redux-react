import React, { useState } from 'react'
import randomColor from 'randomcolor'
const Aside = () => {


    const [color,setColor]=useState('red')
    const newColor=randomColor()
    const changeColor=()=>{
setColor(newColor)
    }
  return (
    <div className='aside'>
      <h2 style={{color}}>Aside</h2>
      <button onClick={changeColor}>Change color</button>
    </div>
  )
}

export default Aside

