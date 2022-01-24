import React from 'react'
import Book from '../Components/Book'
function Hero({books,pickBook}) {
    console.log(books);
    let allbooks = books.map(book =>{
  
    return <Book key = {book.id}   book = {book} pickBook = {pickBook} />
     
    })

    return (
    <section className = 'hero-container'>
        <div className = 'hero'>
         {allbooks}
        </div>  
    </section>
    )
}

export default Hero
