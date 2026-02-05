import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return(
    <h1>hello Saad</h1>
  )
}
const ReactElement={
  type:'a',
  props:{
    href:'http://google.com',
    target:'_blank'
  },
  children:'click me to visit google'
}
const NewApp=(
  <a href="http://google.com" target='_black'>click to open google</a>
)

const AnotherReactElement=React.createElement(
  'a',
  {href:'http://google.com',target:'_blank'},'click to visit google'
)
createRoot(document.getElementById('root')).render(
  <App/>
    // <MyApp />
    // reactElement
    // NewApp
    // AnotherReactElement
)