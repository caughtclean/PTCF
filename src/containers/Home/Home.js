import React, { Component, ProtoTypes } from 'react';
import { Container, Relative } from '../../theme/grid';
import { Image, ProfileImage, Background, Img, Title, Panels, Panel } from './Home.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import YouTube from 'react-youtube';

const panels = document.querySelectorAll('.panel');

 const Video = {
  opts1: {
      height: '200',
      width: '350',
      id: "tzD9BkXGJ1M"
  },
  opts2: {
      height: '200',
      width: '350',
      id: "mlVrkiCoKkg"
  },
  opts3: {
      height: '200',
      width: '350',
      id: "8miqQQJEsO0"
  }
};


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
            <YouTube
            videoId={Video.opts1.id}
            opts={Video.opts1}
            />
            <p>What is CrossFit?</p>
            <p>Dance</p>
          </div>
          <div className={this.state.panel2} onClick={ this.toggleOpen2 }>
            <YouTube
            videoId={Video.opts2.id}
            opts={Video.opts2}
            />
            <p>Who can do it?</p>
            <p>Receive</p>
          </div>
          <div className={this.state.panel3} onClick={ this.toggleOpen3 }>
            <YouTube
            videoId={Video.opts3.id}
            opts={Video.opts3}
            />
            <p>Instructors</p>
            <p>Today</p>
          </div>
        </Panels>
        <Background/>
        <Title> PTCF </Title>
      </Container>

    );
  }
}
