import React from 'react'
// import Gretting from './components/Gretting'
import Counter from './components/Counter'

//component : it is a resuable block of ui, it is just a fn which return html-like code.
const App = () => {
  return (
    //Jsx : jsx stands for javascript XML, in which we can write the combination of html and js
    // <div>
    //  <Gretting name = "Vitesh"/>
    //  <Gretting name = "Interviewer"/>
    // </div>
    <Counter/>
  )
}

export default App;