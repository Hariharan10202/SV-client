import React from 'react';
import { Link } from 'react-router-dom';

import {
  Box,
  H2,
  Icon1,
  Icon2,
  Img,
  ImgBx,
  LinkItem1,
  LinkItem2,
  OrderesList,
  Place,
  UnOrderedList,
} from '../Work/workStyled';

const Cards = ({ Image, District }) => {
  return (
    <Link to={`/${District}`}>
      <Box>
        <ImgBx>
          <Img src={Image} alt='' />
        </ImgBx>
        <UnOrderedList>
          <OrderesList>
            <LinkItem1>
              <Icon1 />
            </LinkItem1>
            <LinkItem2>
              <Icon2 />
            </LinkItem2>
          </OrderesList>
        </UnOrderedList>
        <Place>
          <H2>{District}</H2>
        </Place>
      </Box>
    </Link>
  );
};

export default Cards;
