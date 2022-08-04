import styled from 'styled-components';

import { MdCollections } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

export const Wrapper = styled.div`
  padding: 50px;
  color: white;
  background-color: #000;
`;

export const Heading = styled.h1`
  margin-top: 20px;
  font-weight: 600;
  font-size: 4rem;
  color: white;
  font-family: cursive;
  text-align: center;
`;

export const Box = styled.div`
  position: relative;
  width: 400px;
  height: 280px;
  background-color: #000;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
`;

export const ImgBx = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  overflow: hidden;
  z-index: 2;
  background-color: #000;
`;

export const Img = styled.img`
  transition: 0.5s;
  width: 100%;
  object-fit: cover;
  opacity: 0.7;
  cursor: pointer;

  ${Box}:hover & {
    opacity: 0.3;
  }
`;

export const UnOrderedList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const OrderesList = styled.li`
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const LinkItem1 = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* line-height: 50px; */
  text-align: center;
  background-color: black;
  transition: 0.5s;
  transform: translateY(120px);
  opacity: 0;
  ${Box}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Icon1 = styled(MdCollections)`
  color: white;
  font-weight: 600;
  font-size: 20px;
  transition: all 0.2s;
  ${LinkItem1}:hover & {
    transform: rotateY(360deg);
  }
`;

export const LinkItem2 = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  background-color: black;
  transition: 0.7s;
  transform: translateY(120px);
  opacity: 0;
  ${Box}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Icon2 = styled(IoLocationSharp)`
  color: white;
  font-weight: 600;
  font-size: 20px;
  transition: all 0.2s;
  ${LinkItem2}:hover & {
    transform: rotateY(360deg);
  }
`;

export const Place = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: gray;
  z-index: 4;
  width: 100%;
  height: 70px;
  box-sizing: border-box;
`;

export const H2 = styled.h2`
  margin: 10px;
  padding: 0;
  text-align: center;
  color: black;
  font-weight: 500;
  font-size: 2rem;
`;
