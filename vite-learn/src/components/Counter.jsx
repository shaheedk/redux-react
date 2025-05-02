import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)

    const increment=()=>{
        setCount(count=>count+1)
    }
    const decrement=()=>{
        count>0?
        setCount(count=>count-1)
        :0
    }
  return (
    <div className='counter'>
      <h2>Counter</h2>
      <h3>The count is {count}</h3>
<button onClick={()=>increment()}>Increse</button>
      <button onClick={()=>decrement()}>Decrese</button>
    </div>
  )
}

export default Counter
