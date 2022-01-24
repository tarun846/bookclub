import React from 'react'

function Book({book,pickBook}) {
  const {author, image,title}   = book;
    
   
    return (
        <div    className ='book' onClick = {() => { pickBook && pickBook(book) }}  >
      <img   src = {image} alt = {title} />
      <h2 className = 'book-title' >
          {title}
      </h2>
      <h1 className = 'book-author' > {author}</h1>       
        </div>
    )
}

export default Book
