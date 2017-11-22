import React, { Component } from 'react';
import { Container } from '../../theme/grid'
import { Title, Background, RevealP, About } from './Schedule.style'
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import YouTube from 'react-youtube';
import { Flex } from '../../theme/grid';



class Schedule extends Component {
  render() {
    return (
      <Container>
        <NavigationBar/>
        <Background/>
      </Container>
    );
  }
}


export default Schedule;