
import type { Book } from '../App'
import React from 'react'

type cart = {
  items: Book[]
  deleteItem: (book: Book) => void
  
}
// add up total and delete items 
function Cart({items, deleteItem} : cart,) {
  const totalPrice = items.reduce((sum, book) => sum + book.price, 0)
  
  return (
    <div className='container'>
      <h3 style={{textAlign:'right'}}>Cart</h3>
      <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" className='cartImage' />
        <ul style={{textAlign:'right', listStyle: 'none'}}>
          {items.map((book,index) => (
            <li key={index}>
              {book.bookTitle} - ${book.price} 
                <button onClick={()=> deleteItem(book)}>x</button>
              
              </li>
            
          ))}
         <p>Total: ${totalPrice}</p>
      </ul>
    </div>

    
  )

}

export default Cart