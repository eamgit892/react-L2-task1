// import { useState } from 'react'
import React from 'react'
import screenshot from '../assets/TqHYQYgJmb.png'
// import viteLogo from '/vite.svg'
import './App.css'

// creates react app with createelement 
function App2() {

  let rf = React.Fragment,
      new_ = React.createElement;

  const output = new_(rf, null, 
    new_("h1", null, "Заголовок 1-го рівня"), 
    new_("p", null, "paragraph text"), 
    new_("img", {src: screenshot, alt: 'зображення2'}), 
  )
  
  return output
}

export default App2
