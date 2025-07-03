import React from 'react'
import type { Book } from '../App';

type Props = {
 book: Book
 addToCart: (book: Book) => void
}
function BookCard({book, addToCart} : Props) {
  return (

    // iterate all ten books so each have a card
    <div className="card" style={{ width: '15rem'}}>
      <img src={book.coverImage} alt="Book cover"  />
      <div className="card-body">
        <h5>{book.bookTitle}</h5>
        <h6>{book.author}</h6>
        <h6>{book.year}</h6>
        
        <p className="text-muted">{book.summary}</p>
        <h4> ${book.price}</h4>
        <button className="btn btn-dark" onClick={() => addToCart(book)}>Buy</button>

      </div>
    </div>


  )

}

export default BookCard;