import React from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
export default function SlideShow({ images }) {
  return (
    <CarouselProvider
      naturalSlideWidth={150}
      naturalSlideHeight={100}
      totalSlides={4}>
      <Slider>
        {images.map((slide, index) => (
          <Slide index={index}>
            <Image
              style={{
                objectFit: 'cover',
                height: 'auto',
                objectPosition: 'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              isIntrinsicHeight={true}
              isBgImage={true}
              src={slide}
              alt='slide'
            />
          </Slide>
        ))}
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  )
}

// display: block;
//     width: 100%;
//     height: auto;
//     object-position: center;
//     object-fit: cover;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
