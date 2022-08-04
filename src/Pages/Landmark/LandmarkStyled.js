import styled from 'styled-components';

import { MdCollections } from 'react-icons/md';

export const Wrapper = styled.div``;

export const Background = styled.div`
  position: relative;
  background: rgb(0, 0, 0);
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.9475140397956058) 13%,
      rgba(0, 0, 0, 0.8130602582830007) 43%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${({ Image }) => Image});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

export const Content = styled.div`
  position: absolute;
  left: 5%;
  top: 50%;
  display: flex;
  justify-content: left;
  flex-direction: column;
  gap: 30px;
  width: 500px;
`;

export const Name = styled.h2`
  color: white;
  font-weight: 600;
  font: 4rem;
`;

export const Paragraph = styled.p`
  color: white;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 20px;
  line-height: 34px;
`;
export const BtnWrap = styled.div``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 10px;
  font-size: 1.3rem;
  font-weight: 500;
  padding: 10px 20px 10px 40px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.25);
  border: none;
  color: rgba(255, 255, 255, 0.8);
  outline: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const Icon = styled(MdCollections)`
  color: rgba(255, 255, 255, 0.8);
  transform: translateX(-30px);
  transition: 0.4s;
  opacity: 0;
  ${Button}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;
