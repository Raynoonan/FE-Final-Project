
import type { Book } from '../App'
import React from 'react'

type cart = {
  items: Book[]
  
}
// add up total and delete items 
function Cart({items} : cart,) {
  return (
    <div className='container'>
      <h3 style={{textAlign:'right'}}>Cart</h3>
      <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" className='cartImage' />
        <ul style={{textAlign:'right', listStyle: 'none'}}>
          {items.map((book,index) => (
            <li key={index}>
              {book.bookTitle} - ${book.price}
              
              </li>
            
          ))}
        
      </ul>
    </div>

    
  )

}

export default Cart