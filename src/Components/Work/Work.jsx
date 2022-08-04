import React, { useState } from 'react';
import { Line } from '../Collections/workStyled';

import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Navigation, Thumbs } from 'swiper';

import './TempStyle.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { Heading, Wrapper } from './workStyled';

import { Places } from '../../Places';
import Cards from '../Cards/Cards';

// import { Link } from 'react-router-dom';

const Work = () => {
  const [thumbsSwiper] = useState(null);

  return (
    <Wrapper className='placeCaresoul'>
      <Heading>Works</Heading>
      <Line />
      <Swiper
        style={{
          marginTop: '100px',
        }}
        loop={true}
        spaceBetween={300}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
        slidesPerView={4}
      >
        {Places.map((place, index) => (
          <SwiperSlide key={index}>
            <Cards Image={place.Image} District={place.Place} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default Work;
