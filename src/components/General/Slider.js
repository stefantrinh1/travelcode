import React from 'react'
import styled from 'styled-components'
import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons'

export default function SlideShow({ images }) {
  const titles = [
    'Antelope Caynon',
    'Kanab',
    'Nouvelle Vallée',
    'Cypress Tree Tunnel',
  ]
  const subtitles = ['UTAH', 'UTAH', 'Seychelles', 'Point Reyes']

  const linkNames = [
    'Explore The Caynons',
    'Venture Through the Caves',
    'Sail the Seas',
    'Run For The Trees',
  ]
  const links = [
    'locations/antelopecaynon',
    'locations/kanab',
    'locations/nouvellevallee',
    'locations/pointreyes',
  ]

  return (
    <Container>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={4}
        isIntrinsicHeight={true}>
        <Slider>
          {images.map((slide, index) => (
            <Slide index={index}>
              <Image
                style={{
                  objectFit: 'cover',
                  height: '100vh',
                  width: '100vw',
                  objectPosition: 'center',
                }}
                isIntrinsicHeight={true}
                isBgImage={true}
                src={slide}
                alt='slide'
              />

              <SlideTitle>{titles[index]}</SlideTitle>
              <SlideSubtitle>{subtitles[index]}</SlideSubtitle>
              <Button>
                <Router>
                  <NavLink to={`/${links[index]}`}>{linkNames[index]}</NavLink>
                </Router>
              </Button>
            </Slide>
          ))}
        </Slider>

        <ButtonBack>
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </ButtonBack>
        <ButtonNext>
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </ButtonNext>
      </CarouselProvider>
    </Container>
  )
}

const Container = styled.section`
  position: relative;
  .carousel__back-button,
  .carousel__next-button {
    position: absolute;
    border: none;
    bottom: 0;
    color: white;
    font-size: 2rem;
    left: 0;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
  img {
    filter: brightness(0.9);
  }

  .carousel__back-button {
  }
  .carousel__next-button {
    left: 3rem;
  }

  .carousel__inner-slide {
    position: relative !important;
  }
`

const SlideTitle = styled.h2`
  text-align: center;
  width: 100%;
  position: absolute;
  top: 40%;
  color: ${({ theme }) => theme.light};
  font-size: 2rem;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: ${({ theme }) => `2px 2px 2px ${theme.dark}`};
  z-index: 100;

  @media (min-width: 767px) {
    top: 45%;
    font-size: 3rem;
  }
`
const SlideSubtitle = styled.h3`
  -webkit-text-stroke-width: 1px;
  color: transparent;
  -webkit-text-stroke-color: white;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  position: absolute;
  top: 60%;
  font-size: 3rem;

  @media (min-width: 767px) {
    font-size: 8rem;
    top: 50%;
  }
`

const Button = styled.button`
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  position: absolute;
  top: 70%;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 50px;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.light};
    padding: 1rem 1.5rem;
  }
`
