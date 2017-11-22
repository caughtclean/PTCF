import React, { Component, ProtoTypes } from 'react';
import { Container, Relative } from '../../theme/grid';
import { Image, ProfileImage, RevealP, Background, Img, Title } from './Home.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar';



export default class Home extends Component {
  static protoTypes = {};

  render() {
    return (
      <Container>
        <ProfileImage/>
        <Background/>
        <Title> PTCF </Title>
      </Container>
    );
  }
}

