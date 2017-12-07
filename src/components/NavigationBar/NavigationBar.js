import React, {Component} from 'react';
import { NavigationContainer, NavItem, Logo } from '../../components/NavigationBar/NavigationBar.style';
import { A, AA, Links } from '../../theme/types';





class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
          <Logo
            src={require('../../assets/powtowncrossfit.jpg')}
            alt="logo"/>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/instructors">Instructors</NavItem>
        <NavItem to="/schedule">Schedule/Classes</NavItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;