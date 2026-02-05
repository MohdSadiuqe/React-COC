import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from "./component/Cart"
function App() {
  let myobj={
    username:"hamza",
    age:22
  }
  return (
    <>
    <Cart username="hamza" btnText="clickme"/>
    <Cart username="Saad" btnText="visitme"/>
    </>
  )
}

export default App
