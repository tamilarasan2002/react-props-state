import React from "react";
import "./Header.css"
const Header=(pros)=>{
  
  const Header= <header>
    <nav   className='navi'>    
    <p style={{margin:"2rem"}}>{pros.name}</p>
    <p style={{margin:"2rem"}}>{pros.objname}</p>

    </nav>
  </header> 
  return Header;
}
export default Header

