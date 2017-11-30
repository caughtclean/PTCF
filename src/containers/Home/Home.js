import React, { Component, ProtoTypes } from 'react';
import { Container, Relative } from '../../theme/grid';
import { Image, ProfileImage, Background, Img, Title, Panels, Panel } from './Home.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const panels = document.querySelectorAll('.panel');


export default class Home extends Component {
  static protoTypes = {};
  constructor(props) {
    super(props);
    this.state = {panel1: "panel panel1",
                  panel2: "panel panel2",
                  panel3: "panel panel3"
    };
    this.toggleOpen1 = this.toggleOpen1.bind(this);
    this.toggleOpen2 = this.toggleOpen2.bind(this);
    this.toggleOpen3 = this.toggleOpen3.bind(this);
  }

  toggleOpen1() {
    if(this.state.panel1 === "panel panel1") {
      this.setState({panel1: "panel panel1 open"})
        setTimeout(function() { this.setState({panel1: "panel panel1 open open-active"}); }.bind(this), 700);
    }
    else{
      this.setState({panel1: "panel panel1"})
    }
  }
  toggleOpen2() {
    if(this.state.panel2 === "panel panel2") {
      this.setState({panel2: "panel panel2 open"})
        setTimeout(function() { this.setState({panel2: "panel panel2 open open-active"}); }.bind(this), 700);
    }
    else{
      this.setState({panel2: "panel panel2"})
    }
  }
  toggleOpen3() {
    if(this.state.panel3 === "panel panel3") {
      this.setState({panel3: "panel panel3 open"})
        setTimeout(function() { this.setState({panel3: "panel panel3 open open-active"}); }.bind(this), 700);
    }
    else{
      this.setState({panel3: "panel panel3"})
    }
  }

  render() {
    return (
      <Container>
        <ProfileImage/>
        <Panels>
          <div className={this.state.panel1} onClick={ this.toggleOpen1 }>
            <p>Hey</p>
            <p>Let's</p>
            <p>Dance</p>
          </div>
          <div className={this.state.panel2} onClick={ this.toggleOpen2 }>
            <p>Give</p>
            <p>Take</p>
            <p>Receive</p>
          </div>
          <div className={this.state.panel3} onClick={ this.toggleOpen3 }>
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
