import { Carousel } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

function ImageSlide({characters}) {

  return (
    <Carousel>
      {characters.map((char) => (
        <Carousel.Item key={char.id}>
      <img className="d-block w-100" src={char.image} style={{maxHeight: '600px', maxWidth: "800px", objectFit: 'cover', margin:"auto" }}></img>
      <Carousel.Caption>
        <h3 style={{fontWeight: "bold"}}>{char.name}</h3>
        <p style={{backgroundColor: 'rgba(0, 0, 0, 0.6'}}>{char.description}</p>
      </Carousel.Caption>
      </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default ImageSlide