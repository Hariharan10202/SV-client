import styled, { keyframes } from 'styled-components';

export const Img = styled.img`
  object-fit: cover;
  height: 100vh;
  width: 100%;
  filter: brightness(50%);
`;

export const Content = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 50px 30px;
  border: 2px solid #ffdaaf;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 2;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const HeadText = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 8px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  line-height: 1;
  -webkit-text-stroke: 2px #fff;
  -webkit-text-fill-color: transparent;
  color: white;
`;

export const Paragraph = styled.p`
  font-weight: 500;
  color: #ffdaaf;
  text-align: center;
  font-size: 18px;
`;

export const OuterSpan = styled.span`
  display: block;
  position: relative;
  z-index: 1;
`;

export const InnerSpan = styled.span`
  overflow: hidden;
  mix-blend-mode: difference;
`;

export const MoveRightInitial = keyframes`
to {
		transform: translate3d(105%,0,0);
	}
`;

export const MoveRightEnd = keyframes`
from {
		transform: translate3d(-100%,0,0);
	}
	to {
		transform: translate3d(0,0,0);
	}
`;

export const Button = styled.button`
  pointer-events: auto;
  cursor: pointer;
  background: transparent;
  padding: 1rem 3rem;
  margin: 0;
  position: relative;
  display: inline-block;
  overflow: hidden;
  font-family: obvia, sans-serif;
  font-weight: 800;
  font-size: 1.15rem;
  color: white;

  &:hover > ${OuterSpan} > ${InnerSpan} {
    animation: ${MoveRightInitial} 0.1s forwards, ${MoveRightEnd} 0.3s forwards 0.2s;
    color: black;
  }

  &:before,
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background: #ffdaaf;
  }

  &:before {
    width: 135%;
    -webkit-clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 0%);
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 0%);
    transform: translate3d(-100%, 0, 0);
  }

  &:hover:before {
    transform: translate3d(0, 0, 0);
    transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
    color: black;
  }

  &:after {
    width: 105%;
    transform: translate3d(100%, 0, 0);
    transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  }

  &:hover:after {
    transform: translate3d(0, 0, 0);
    transition: transform 0.01s 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
