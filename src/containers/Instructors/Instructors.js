import React, { Component } from 'react';
import { Background, Img, P, Profile } from './Instructors.style';
import { Container, Relative, Flex, marginBottom } from '../../theme/grid';
import { A, Links } from '../../theme/types';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

class Projects extends Component {
  render() {
    return (
      <Container>
        <Background/>
        <NavigationBar/>
        <Profile>
        </Profile>
      </Container>
    );
  }
}

export default Projects;