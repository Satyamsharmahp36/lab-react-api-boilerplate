import React from 'react'
import './App.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';

function App() {
  
const [state,setState]=useState([]);

useEffect(()=>{
  axios.get("https://reactnd-books-api.udacity.com/books",{headers:{
    "Authorization": 'whatever-you-want' 
  }})
  .then((res)=>
    setState(res.data.books)
    
  )
  .catch((err)=>{
    console.log(err)
  })
},[])




return (
  <>
    <div>
      {state.map((el)=>{
        return (
          <div key={el.id}>
            <h2 style={{
              textAlign:'left'
            }} >{el.title}</h2>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems : 'center'
            }}>
            <img style={{
              width: '13%'
            }} src={el.imageLinks.thumbnail}/>
            <p style={{
              width:'80%',
              textAlign: 'left'
            }}>{el.description}</p>
            </div>
            <h4 style={{
              textAlign:'left'
            }}>{el.authors}</h4>
            <hr />
          </div>
        )
      })}
    </div>
</>
)
}

export default App
