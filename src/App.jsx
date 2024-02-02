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
      {state.map((e)=>{

// giving diffent id to the exery div so it can be rendered again

        return (
          <div key={e.id}>
            <h2 style={{color:"orange", textAlign:'left' , fontSize:"2vw"}} >
              {e.title}
              </h2>

            <div id='mainSection'>

            <img src={e.imageLinks.thumbnail} alt="images" />

            <p> {e.description} </p>

            </div>

            <h4>{e.authors}</h4>
            <hr />
          </div>
        )
      })}
    </div>
</>
)
}

export default App
