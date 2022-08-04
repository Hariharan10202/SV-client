import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 50px;
  background-color: black;
  height: auto;
`;

export const WorkHeader = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  font-family: cursive;
  text-align: center;
  color: white;
`;

export const Line = styled.hr`
  margin-top: 40px;
  height: 3px;
  border-radius: 8px;
  background-color: white;
  color: white;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 100px;
  align-items: center;
  padding: 5rem;
`;

export const CollectionContent = styled.h2`
  font-weight: 700;
  color: white;
  letter-spacing: 8px;
  font-size: 30px;
`;

export const CollectionParagraph = styled.p`
  font-weight: 500;
  padding-top: 20px;
  color: white;
  text-align: left;
  width: 500px;
  font-size: 18px;
  line-height: 35px;
`;

export const LeftContainer = styled.div``;

export const RightContainer = styled.div``;

export const CardView = styled.div`
  height: 100%;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center center;
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }

  &::before {
    opacity: 1;
    transition: 0.2s ease;
  }

  &:hover::before {
    opacity: 1;
    transition: 0.2s ease;
  }
  &:hover {
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.342472022988883) 27%, rgba(0, 0, 0, 1) 84%),
      url(${({ url }) => url});
    background-size: cover;
    background-position: center center;
    background-size: cover;
    background-position: center;
    transform: scale(110%);
  }
`;

export const InnerContent = styled.p`
  opacity: 0;
  position: absolute;
  top: 50%;
  font-weight: 500;
  font-size: 20px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 3;
  transform: translateY(60px);
  transition: 0.5s ease-out;

  ${CardView}:hover & {
    opacity: 1;
    transform: translateY(-10px);
  }
`;
