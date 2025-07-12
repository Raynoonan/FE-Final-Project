import React, { useState } from 'react'
import ReviewStars from './ReviewStars.tsx'

type ReviewFormProps ={
    stars: number
    setStars: (stars: number) => void
    onSubmit: (data: {
        name: string
        book: string
        review: string
        stars: number
    }) => void
}

const ReviewForm: React.FC<ReviewFormProps> = ({ stars, setStars, onSubmit}) => {
    const [name, setName] = useState('')
    const [book, setBook] = useState('')
    const [review, setReview] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
    if (!name.trim() || !book.trim() || !review.trim() || stars === 0) return;

    onSubmit({ name, book, review, stars });

    setName('')
    setBook('')
    setReview('')
    setStars(0)
    }



  return (
    <div >
        <form onSubmit={handleSubmit} style={{marginTop: "1em"}} >
         <label htmlFor='name'>Name:</label> 
         <input type="text"  name="name" id="name" onChange={(e) => setName(e.target.value)} /> <br />
         <label htmlFor="book">Book your reviewing:</label>
         <input type="text" name="book" id="book" onChange={(e) => setBook(e.target.value)} /><br />

         <label htmlFor="review">What do you think of this Book?</label><br />
         <textarea id='review' rows={5} cols={50} onChange={(e) => setReview(e.target.value)}/> <br />

         <label>Rating:</label> <br />
         <ReviewStars stars={stars} setStars={setStars}/>

         <button type='submit' style={{marginBottom: '2em'}}>submit</button>
         
        </form>
    </div>
  )
}

export default ReviewForm