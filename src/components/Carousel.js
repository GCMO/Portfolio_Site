
import { CarouselContainer, CarouselWrapper, CarouselCW, CarouselContent } from './styles/Carousel.styled';
import { ArrowRightCircle, ArrowLeftCircle } from '@styled-icons/bootstrap';
import { useState, useEffect } from 'react';

const Carousel = (props) => {
  const {children} = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length);

  useEffect( () => {
    setLength(children.length);
  }, [children]);

  // Handle the click on the left/right buttons
  const prev = () => {
    if (currentIndex > 0){
      setCurrentIndex(prevState => prevState - 1);
    }}
  const next = () => {
    if ( currentIndex < (length -1) ) { 
      setCurrentIndex(prevState => prevState + 1);
      // setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1); <refactorred>
  }}



  return (
    <CarouselContainer>
      
        <CarouselWrapper>

            <button onClick={prev}> <ArrowLeftCircle /></button> 
          
              <CarouselCW>
                <CarouselContent style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                     {children}
                </CarouselContent>
              </CarouselCW>

            <button onClick={next}> <ArrowRightCircle /></button>
              
        </CarouselWrapper>
    </CarouselContainer>
      
  )
}

export default Carousel
