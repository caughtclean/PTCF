import React, {Component} from 'react';
import { NavigationContainer, NavItem, Logo } from '../../components/NavigationBar/NavigationBar.style';
import { A, AA, Links } from '../../theme/types';





class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <Logo
          src={require('../../assets/logonew.png')}
          alt="logo"/>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;