import React from 'react';
import Slider from 'react-slick';
import '../css/carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'


const ImageCarousel = () => {
  const settings = {
    dots: true,            // Display navigation dots
    infinite: true,        // Loop over slides infinitely
    speed: 500,            // Transition speed in milliseconds
    slidesToShow: 1,       // Number of slides to show at once
    slidesToScroll: 1,     // Number of slides to scroll at once
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 3000,   // Autoplay speed in milliseconds
  };

  return (
    <div className="carousel-container">
      <Slider className='slider' {...settings}>
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" />
        </div>
        <div>
          <img src={image3} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
