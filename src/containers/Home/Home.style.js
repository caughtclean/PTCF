import styled, { css } from 'styled-components';
import media from '../../theme/media';



export const Image = styled.img`
  width: 100%
`

export const Img = styled.img`
  height: 25%;
  width: 25%;
  float: right;
  bottom: 0;
  right: -20vh;
`;

export const Title = styled.h2`
  margin-top: 20vh;
  color: black;
  margin-bottom: 10vh;
  text-align: center
`;

export const Journal = styled.a`

`;


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
  opacity: 0.55;
  background-image: url(${require('../../assets/powtowncrossfit.jpg')});

  ${media.tablet`
    font-size: 1em;
    left: 0;
    width: 100vw;
    top: 0;
    height: 80vh;
    margin-top: 10vh;
    margin-bottom: 300px;
    `}
      ${media.phone`
    font-size: 1em;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%
    margin-top: 10vh;
    margin-bottom: 300px;
    `}


`;



export const Panels = styled.div`
  min-height:100vh;
  overflow: hidden;
  display: flex;
  margin-top: 30vh;
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


    .panel1 { background-image: url('${require('../../assets/panel1.jpg')}'); }
    .panel2 { background-image:url('${require('../../assets/panel2.jpg')}'); }
    .panel3 { background-image:url('${require('../../assets/panel3.jpg')}'); }
    .panel4 { background-image:url(https://source.unsplash.com/ITjiVXcwVng/1500x1500); }
    .panel5 { background-image:url(https://source.unsplash.com/3MNzGlQM7qs/1500x1500); }

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
    }
    .panel p:nth-child(2) {
      font-size: 3em;
    }

    .panel.open {
      font-size:15px;
      flex: 5;
    }
`;

