import React from 'react'
import exit from '../assets/icon-exit.svg'
function Detailspanel({book , closepanel ,state}) {
    console.log(book.description);
    return (
        <div className = 'DetaiContainer' >
          <div className = 'details' >
              <div className = 'detials-image' > 
                <img src = {book.image} alt = {book.image} />
               </div>
               <div className = 'exit'   >
                <img  src = {exit} alt = 'exit_image'   onClick = {closepanel} />
               </div>
               </div>  
               <h2 className = 'title' > {book.title} </h2>
              <h2 className = 'author' > {book.author}</h2> 
              <p className = 'description' > {book.description} </p>
              <h3 className = 'published' > {book.published} </h3>
         
        </div>
    )
}

export default Detailspanel
