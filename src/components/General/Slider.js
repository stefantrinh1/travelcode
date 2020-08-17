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

.slick-initialized .slick-slide > div{
    overflow: hidden;
    position: relative;
    height: 50vh;
    width: 100vw;
}

.slick-slide img{
position: absolute;
    top: 50%;
    left: 50%;
    object-fit: cover;
    width: 100%;
    transform: translate(-50%, -50%);
}

`