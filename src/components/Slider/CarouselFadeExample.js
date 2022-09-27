import Carousel from 'react-bootstrap/Carousel';
import '../Slider/slider.css'

function CarouselFadeExample() {
  return (
    <>
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://wowslider.com/sliders/demo-23/data1/images/landscape1344620.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://wowslider.com/sliders/demo-5/data/images/sur.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://smartslider3.com/wp-content/uploads/slider/cache/9f0ba3089a33fb2054e0d6017db9b872/background2.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </>
  );
}

export default CarouselFadeExample;