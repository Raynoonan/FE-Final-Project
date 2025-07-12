import React from 'react'



  type ReviewStarsProps = {
    stars: number
    setStars: (stars:number) => void
  }

  const ReviewStars: React.FC<ReviewStarsProps> = ({stars, setStars}) => {

  
return (
    <div>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} onClick={() => setStars(n)}
         style={{
            fontSize: '24px',
            cursor: 'pointer',
            color: n <= stars ? 'gold' : 'gray' }}>★</span>
      ))}
    </div>
  );
};



export default ReviewStars