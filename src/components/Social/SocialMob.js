import React, {Component} from 'react';
import { SocialMobContainer, NavItem } from '../../components/NavigationBar/NavigationBar.style';
import { A, AA, AAA, Links } from '../../theme/types';

class SocialMob extends Component {
  render() {
    return (
      <SocialMobContainer>
       <AAA target="_blank" href="">
        <img
          src={require('../../assets/facebook.png')}/>
       </AAA>
       <AAA target="_blank" href="https://www.instagram.com/">
        <img
          src={require('../../assets/instagram.png')}/>
       </AAA>
       <AAA target="_blank" href="https://www.twitch.tv/">
        <img
          src={require('../../assets/twitch.png')}/>
       </AAA>
       <AAA target="_blank" href="https://www.linkedin.com/">
        <img
          src={require('../../assets/linkedin.png')}/>
       </AAA>
       <AAA target="_blank" href="https://www.youtube.com/">
        <img
          src={require('../../assets/youtube.png')}/>
       </AAA>
       <AAA href="mailto:">
        <img
          src={require('../../assets/email.png')}/>
       </AAA>
      </SocialMobContainer>
    );
  }
}

export default SocialMob;