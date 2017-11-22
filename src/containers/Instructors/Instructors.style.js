import styled from 'styled-components';
import media from '../../theme/media';


export const Background = styled.div`
  position: fixed;
  left: 10vw;
  width: 80vw;
  top: 10vh;
  height: 100vh;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
  opacity: 0.35;

`;

export const Img = styled.img`
width: 50%;
height: 50%;
padding-right: 20px;
margin-top: -10%;

`;

export const P = styled.p`
  margin-top: 10%;
  float: right;
  display: flex;
`;

export const Profile = styled.div`
  margin-top: 20vh;
`;
