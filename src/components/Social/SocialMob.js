import React, {Component} from 'react';
import { SocialMobContainer, NavItem } from '../../components/NavigationBar/NavigationBar.style';
import { A, AA, AAA, Links } from '../../theme/types';

class SocialMob extends Component {
  render() {
    return (
      <SocialMobContainer>
       <AAA target="_blank" href="https://www.facebook.com/powtowncrossfit/">
        <img
          src={require('../../assets/facebook.png')}/>
       </AAA>
       <AAA target="_blank" href="https://www.instagram.com/powtowncrossfit/">
        <img
          src={require('../../assets/instagram.png')}/>
       </AAA>
       <AAA href="mailto: info@powtowncrossfit.com">
        <img
          src={require('../../assets/email.png')}/>
       </AAA>
      </SocialMobContainer>
    );
  }
}

export default SocialMob;