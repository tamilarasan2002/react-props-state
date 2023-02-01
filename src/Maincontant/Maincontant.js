import React from 'react'
import "./Maincontant.css"
const Maincontant = (pros) => {
  return (
     <section>
          <div className="container">
            <div className='row'>
              <div className='col'>
                  <img src='./logo192.png' alt=''></img>
              </div>
              <div className='col'>
                   <img src='./logo192.png' alt=''></img>
              </div>
             
            </div>
            <button onClick={()=>pros.changeName("abi")}>Change Name</button>
          </div>
        </section>
    
  )
}

export default Maincontant