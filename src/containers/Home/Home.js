import React, { Component, ProtoTypes } from 'react';
import { Container, Relative } from '../../theme/grid';
import { Image, ProfileImage, RevealP, Background, Img, Title, Panels, Panel } from './Home.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar';




export default class Home extends Component {
  static protoTypes = {};
  constructor(props) {
    super(props);
    this.state = {isOpen1: "",
                  isOpen2: "",
                  isOpen3: ""
    };
    this.toggleOpen1 = this.toggleOpen1.bind(this);
    this.toggleOpen2 = this.toggleOpen2.bind(this);
    this.toggleOpen3 = this.toggleOpen3.bind(this);
  }

  toggleOpen1() {
    if(this.state.isOpen1 === "") {
      this.setState({isOpen1: " open"})
        setTimeout(function() { this.setState({isOpen1: " open open-active"}); }.bind(this), 700);
    }
    else{
      this.setState({isOpen1: ""})
    }
  }
  toggleOpen2() {
    if(this.state.isOpen2 === "") {
      this.setState({isOpen2: " open"})
        setTimeout(function() { this.setState({isOpen2: " open open-active"}); }.bind(this), 700);
    }
    else{
      this.setState({isOpen2: ""})
    }
  }
  toggleOpen3() {
    if(this.state.isOpen3 === "") {
      this.setState({isOpen3: " open"})
        setTimeout(function() { this.setState({isOpen3: " open open-active"}); }.bind(this), 700);
    }
    else{
      this.setState({isOpen3: ""})
    }
  }

  render() {
    return (
      <Container>
        <ProfileImage/>
        <Panels>
          <div className={"panel panel1" + this.state.isOpen1} onClick={ this.toggleOpen1}>
            <p>Hey</p>
            <p>Let's</p>
            <p>Dance</p>
          </div>
          <div className={"panel panel2" + this.state.isOpen2} onClick={ this.toggleOpen2}>
            <p>Give</p>
            <p>Take</p>
            <p>Receive</p>
          </div>
          <div className={"panel panel3" + this.state.isOpen3} onClick={ this.toggleOpen3}>
            <p>Experience</p>
            <p>It</p>
            <p>Today</p>
          </div>
        </Panels>
        <Background/>
        <Title> PTCF </Title>
      </Container>

    );
  }
}

