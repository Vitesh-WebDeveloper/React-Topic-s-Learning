import React, { useEffectEvent } from 'react'
import { useRef } from 'react';
import { useState } from 'react'
// import { useEffect } from 'react';

const Counter = () => 
  {

// let handlefn = () =>  {
//     a.current = a.current + 10;

//     console.log(`hi im in console just because of useRef`, a.current);
//     alert(a.current)
    
// SetCount(count % 2);
// }


// const [count,SetTime] = useState(0);
// let timesetter = useRef();
//     const start = () =>  {
//       timesetter.current = setInterval(() => {
//             SetTime(count => count + 1);
//         }, 1000);
//       }
//     const stop = () =>  {
//         clearInterval(timesetter.current);
//         timesetter.current = null;
//       }
//     const reset = () =>  {
//         stop();
//         SetTime(0);
//       }

// let a = useRef(0);
// function changeColor() {
//   if (a.current.style.color === "black") {
//     a.current.style.color = "blue"
//   }
//   else {
//     a.current.style.color = "black"
//   }
// }

  return (

    <div>
      {/* <p>The current Count is {count}</p>
      <button onClick={handlefn}>ClickMe</button> */}
      {/* <h1>{count}</h1>
      <button ref = {a} onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button> */}
{/* 
      <h1 ref = {a}>hola</h1>
      <button onClick={changeColor}>clickme</button> */}
      
    </div>
  )

}

export default Counter;
