import Cart from "../Cart.tsx"
import BookCard from "../BookCard.tsx"
import Summaries from "../Summaries.tsx"
import type { Book } from "../../App.tsx"
import { useEffect, useState } from "react"


function HomePage() {
 const [cartItems, setCartItems] = useState<Book[]>([]);
 const [books, setBooks] = useState<Book[]>([]);


  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch("https://685c355a89952852c2dca101.mockapi.io/api/v1/books");
      const data = await response.json();
      setBooks(data);
    }
    fetchBooks();
  }, []);
  
 const addToCart = (book: Book) => {
  setCartItems(prev => [...prev, book])
  
 }

const deleteItem = (book: Book) => {
    setCartItems(prev => prev.filter(b => b.id !== book.id))
  }

  return (

     <div className="homepage">
      <h2 style={{textAlign: "center"}}>Buy Books!</h2>
      <Cart items={cartItems} deleteItem={deleteItem} />
      <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
        {books.map(book => (
          <BookCard key={book.id} book={book} addToCart={addToCart} />
        ))}
      </div>
      <Summaries />
    </div>
  );
}

export default HomePage