import React, { useState } from 'react'
import ReviewStars from "../ReviewStars.tsx"
import ReviewForm from '../ReviewForm.tsx'
// need review to post on page and connect star rating to form

type Review ={
  id: number
  name: string
  book: string
  review: string
  stars: number

}
function ReviewPage() {
  const [stars, setStars] = useState<number>(0)
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1, 
      name: 'Ray',
      book: 'Fourth Wing',
      review: 'Really exciting, fast paced plot.',
      stars: 4
    }
  ])

const handleReviewSubmit = (data: Omit<Review, 'id'>) => {
  const newReview: Review = {
    id: Date.now(),...data
  }

  setReviews([newReview, ...reviews])
  setStars(0)
}

  return (
    <div>
      <h2>Book Reviews</h2>
      <ReviewForm stars={stars} setStars={setStars} onSubmit={handleReviewSubmit}/>
      

       <div style={{ marginTop: '2em' }}>
        <h3>All Reviews</h3>
        {reviews.map((r) => (
          <div key={r.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '1em' }}>
            <strong>{r.name}</strong> reviewed <em>{r.book}</em>
            <p>{r.review}</p>
            <p>{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
  

export default ReviewPage