import React from 'react';
import Slider from "react-slick";
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({images}) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <Container>
        <Slider {...settings}>

            {images.map((image)=> (
            
                <img src={image} />
            
            ))}
        </Slider>
        </Container>
    )
}

const Container = styled.div`
height:100%;
width:100%;
/* .slick-slider,.slick-list, .slick-track,.slick-slide {
    height:inherit
}
.slick-initialized .slick-slide > div{
    overflow: hidden;
    position: relative;
    height: inherit;
    width: 100%;
}

.slick-slide img{
position: absolute;
    top: 50%;
    left: 50%;
    object-fit: cover;
    width: 100%;
    height: inherit;
    transform: translate(-50%, -50%);
} */
.slick-track{
    display: flex;

    .slick-slide {
      height: auto;

      > div {
        height: 100%;
      }

    }
  }

.slick-dots {
    position:absolute;
    bottom:25%;
    display:flex;
    left: 2.5%;
    flex-direction:column;
    width:unset;
}

.slick-dots li {
    display: block;
}

.slick-dots li button:before {
    color:white;
}

.slick-next {
    left: calc(2.5% + 50px);
    bottom: 5%;
    top: unset;
}

.slick-prev {
    left: 2.5%;
    bottom: 5%;
    z-index: 10;
    top: unset;
}

.slick-prev:before, .slick-next:before {
    font-size: 40px;
}

`