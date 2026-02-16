import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data,setdata]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  useEffect(()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
      setdata(response.data);
      setLoading(false);
    })
    .catch(err=>{
      setError(err.message);
      setLoading(false);
    })
  },[])
  if(loading){
    return <p>loading</p>
  }
  if(error){
    return <p>Error: {error}</p>
  }
  return (
    <>
      <h1>post</h1>
      {data.map(post=>(
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  )
}

export default App
