import React from 'react';

import { Navigation, Autoplay, EffectFade, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './tempStyle.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import Image from '../../Images/spacejoy-9M66C_w_ToM-unsplash.jpg';
import Image1 from '../../Images/roberto-nickson-tleCJiDOri0-unsplash.jpg';
import Image2 from '../../Images/toa-heftiba-FV3GConVSss-unsplash.jpg';

import {
  Button,
  ButtonWrapper,
  Content,
  HeadText,
  Img,
  InnerSpan,
  OuterSpan,
  Paragraph,
} from './HeaderStyled';

const Header = () => {
  return (
    <>
      <Content>
        <HeadText>Your home is our's art gallery</HeadText>
        <Paragraph>Opulence, elegance, and comfort should underlie every interior design</Paragraph>
        <ButtonWrapper>
          <Button>
            <OuterSpan>
              <InnerSpan>Get Contract</InnerSpan>
            </OuterSpan>
          </Button>
        </ButtonWrapper>
      </Content>
      <Swiper
        className='swiper-transistion'
        // install Swiper modules
        modules={[Autoplay, Navigation, EffectFade, Keyboard]}
        spaceBetween={0}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect='fade'
        keyboard={{
          enabled: true,
        }}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <Img src={Image} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={Image1} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={Image2} />
        </SwiperSlide>
        {/* <SwiperSlide>
        <Img src={Image} />
      </SwiperSlide>  */}
      </Swiper>
    </>
  );
};

export default Header;
