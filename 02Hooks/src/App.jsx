import { useState } from "react";
function App() {
  let[count,setcounter]= useState(15)
  // let count=5;
  function inc(){
    console.log("click",count);
    setcounter (prev=>{
      if(prev<20){
        return prev+1;
      }
      else{
        return prev;
      }
    })
  }
  function dec(){
    console.log("click",count);
    setcounter (prev=>{
      if(prev>0){
        return prev-1;
      }
      else{
        return prev;
      }
    })
  }
  return (
    <>
    <h1>increase:{count}</h1>
    <button onClick={inc} id="increse">increase value</button>
    <button onClick={dec} id="decrese">decrese value</button>
    </>
  );
}
export default App
