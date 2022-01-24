import React from 'react'
import Logo from '../assets/logo.svg'
function Navbar() {
   
    return (
        <>
         <header>
             <nav>
            <div className="logo">
            <a href="" onClick = {() => window.location.reload()} >
            <img src= {Logo} alt="Logo"/>
            </a>    
            </div>
              
             </nav> 
         </header>   
          {/* <main style = {{height:'500vh'}} ></main> */}
        </>
    )
}
export default Navbar;
