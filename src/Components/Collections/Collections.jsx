import React from 'react';
import { EffectCards, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './tempStyle.module.css';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import './style.css';

import {
  CardView,
  CollectionContent,
  CollectionParagraph,
  Container,
  InnerContent,
  LeftContainer,
  Line,
  RightContainer,
  WorkHeader,
  Wrapper,
} from './workStyled';

const Work = () => {
  return (
    <Wrapper>
      <WorkHeader>Collections</WorkHeader>
      <Line />
      <Container>
        <LeftContainer>
          <Swiper
            className={styles.mySwiper}
            effect={'cards'}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, EffectCards]}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <CardView url='https://images.pexels.com/photos/6361434/pexels-photo-6361434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
                <InnerContent>Lorem ipsum dolor sit amet, consectetur adipisicing</InnerContent>
              </CardView>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <CardView url='https://images.pexels.com/photos/9598173/pexels-photo-9598173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
                <InnerContent>Lorem ipsum dolor sit amet, consectetur adipisicing</InnerContent>
              </CardView>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <CardView url='https://images.pexels.com/photos/11786267/pexels-photo-11786267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
                <InnerContent>Lorem ipsum dolor sit amet, consectetur adipisicing</InnerContent>
              </CardView>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <CardView url='https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
                <InnerContent>Lorem ipsum dolor sit amet, consectetur adipisicing</InnerContent>
              </CardView>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <CardView url='https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
                <InnerContent>Lorem ipsum dolor sit amet, consectetur adipisicing</InnerContent>
              </CardView>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <CardView url='https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
                <InnerContent>Lorem ipsum dolor sit amet, consectetur adipisicing</InnerContent>
              </CardView>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <CardView url='https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
                <InnerContent>Lorem ipsum dolor sit amet, consectetur adipisicing</InnerContent>
              </CardView>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <CardView url='https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
                <InnerContent>Lorem ipsum dolor sit amet, consectetur adipisicing</InnerContent>
              </CardView>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <CardView url='https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
                <InnerContent>Lorem ipsum dolor sit amet, consectetur adipisicing</InnerContent>
              </CardView>
            </SwiperSlide>
          </Swiper>
        </LeftContainer>
        <RightContainer>
          <CollectionContent>What we do?</CollectionContent>
          <CollectionParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quod vero blanditiis
            incidunt quae ad sequi quidem accusamus aperiam quam Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Deserunt corporis distinctio, quisquam libero
            reprehenderit accusamus reiciendis repudiandae commodi totam repellendus?
          </CollectionParagraph>
        </RightContainer>
      </Container>
    </Wrapper>
  );
};

export default Work;
