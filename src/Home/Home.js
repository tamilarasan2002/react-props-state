import React from 'react'
import "./Home.css"
const Home = (pros) => {
  
  return (
    
    <section className='home'>
    <div className='home-text'>
      <h1>Please teel your name</h1>
      <h2>your developer or not</h2>
      {pros.disname}
      <button onClick={()=> pros.func("hi hello")}>Click me</button>

    </div>
  </section>
  )
}

export default Home