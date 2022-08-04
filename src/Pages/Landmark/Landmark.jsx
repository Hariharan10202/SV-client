import React from 'react';
import {
  Background,
  BtnWrap,
  Button,
  Content,
  Icon,
  Name,
  Paragraph,
  Wrapper,
} from './LandmarkStyled';

const Landmark = () => {
  return (
    <Wrapper>
      <Background
        Image={
          'https://images.pexels.com/photos/678117/pexels-photo-678117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
      />
      <Content>
        <Name>Deepa Medicals</Name>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores earum consequatur
          voluptatum distinctio iusto amet, voluptatibus suscipit nostrum officiis. Nam.
        </Paragraph>
        <BtnWrap>
          <Button>
            View in Gallery <Icon />
          </Button>
        </BtnWrap>
      </Content>
    </Wrapper>
  );
};

export default Landmark;
