import styled, { css } from 'styled-components';
import media from '../../theme/media';



export const Image = styled.img`
  width: 100%
`
export const Image2 = styled.img`
  width: 50%;
  ${media.tablet`
    width: 100%;
  `}
`;

export const Image3 = styled.div`
  width = vw;
`;

export const Img = styled.img`
  position: absolute;
  justify-content: center;
  right: 50%;
  left: 50%;
`;


export const Title = styled.h2`
  margin-top: 5vh;
  color: black;
  margin-bottom: 5vh;
  text-align: center
`;

export const Schedule = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  bottom: 0;
`;

export const Journal = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;

export const Gallery = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5%;


  .image-gallery {
    width: 50%;
  }
`;

export const Background = styled.div`
  position: fixed;
  left: 10vw;
  width: 80vw;
  top: 10vh;
  height: 100vh;
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
  opacity: 0.55;
  background-image: url(${require('../../assets/powtowncrossfit.jpg')});

  ${media.tablet`
    font-size: 1em;
    left: 0;
    width: 100vw;
    top: 0;
    height: 100vh;
    margin-top: 10vh;
    margin-bottom: 300px;
    background-size: 100%;
    `}
      ${media.phone`
    font-size: 1em;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%
    margin-top: 10vh;
    margin-bottom: 300px;
    background-size: 100%;
    `}


`;



export const Panels = styled.div`
  min-height:100vh;
  overflow: hidden;
  display: flex;
  &:hover {
    cursor: pointer;
  }
  .panel {
      background:#6B0F9C;
      box-shadow:inset 0 0 0 5px rgba(255,255,255,0.1);
      color:white;
      text-align: center;
      align-items:center;
      /* Safari transitionend event.propertyName === flex */
      /* Chrome + FF transitionend event.propertyName === flex-grow */
      transition:
        font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
        flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
        background 0.2s;
      font-size: 16px;
      background-size:cover;
      background-position:center;
      flex: 1;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
    }


    .panel1 { background-image:url('${require('../../assets/panel1.jpg')}'); }
    .panel2 { background-image:url('${require('../../assets/panel2.jpg')}'); }
    .panel3 { background-image:url('${require('../../assets/drone.gif')}'); }

    .panel > * {
      margin:0;
      width: 100%;
      transition:transform 0.5s;
      flex: 1 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .panel > *:first-child {
      transform: translateY(-100%);
    }

    .panel.open-active > *:first-child {
      transform: translateY(0);
    }

     .panel > *:last-child {
      transform: translateY(100%);
    }
    .panel.open-active > *:last-child {
      transform: translateY(0);
    }

    .panel p {
      text-transform: uppercase;
      text-shadow:0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
      font-size: 1em;
      background: black;
    }


    .panel p:nth-child(2) {
      background: none;
      font-size: 3em;

      ${media.tablet`
        font-size: 1.5em;
      `}

    }


    .panel.open {
      font-size:12px;
      flex: 1;
    }

    .panel img {
      width: 65%;

      ${media.tablet`
        width: 100vw;
      `}
    }

`;

