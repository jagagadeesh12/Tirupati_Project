import React from 'react';
import {Carousel} from '../../components';
import {useCarousel} from '../../hooks';
import OnboardingScreen from './newOnboard/onBoard';

const OnBoard = () => {
  const carouselProps = useCarousel();
  return <OnboardingScreen />;
};

export default OnBoard;
