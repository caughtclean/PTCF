import React, { Component, ProtoTypes } from 'react';
import { Container, Relative } from '../../theme/grid';
import { Image, Background, Img, Title, Panels, Panel } from './Home.style';
import YouTube from 'react-youtube';
import SocialMob from '../../components/Social/SocialMob';

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
        <Background/>
        <Title>PTCF</Title>
        <Panels>
          <div className={this.state.panel1} onClick={ this.toggleOpen1 }>
            <YouTube
            videoId={Video.opts1.id}
            opts={Video.opts1}
            />
            <p>What is CrossFit?</p>
            <p>Here we can give a rundown of what CrossFit entails, workouts, benefits, lots of examples of lifts and WOD etc etc.</p>
          </div>
        </Panels>
        <Panels>
          <div className={this.state.panel2} onClick={ this.toggleOpen2 }>
            <YouTube
            videoId={Video.opts2.id}
            opts={Video.opts2}
            />
            <p>Who can do it?</p>
            <p>Anyone can! Here we can give a quick rundown on the benefits of crossfit and
            how its great for anyone of any age, health, etc. </p>
          </div>
        </Panels>
        <Panels>
          <div className={this.state.panel3} onClick={ this.toggleOpen3 }>
            <YouTube
            videoId={Video.opts3.id}
            opts={Video.opts3}
            />
            <p>Instructors</p>
            <p>Here we can list all the instructors, and links to their bios, who they are, what they are all about etc.</p>
          </div>
        </Panels>
        <Background/>
        <h1>About us</h1>
        <p> About us will go here describing the gym, the culture, whats offered etc.About us will go here describing the gym, the culture, whats offered etc.About us will go here describing the gym, the culture, whats offered etc.About us will go here describing the gym, the culture, whats offered etc.About us will go here describing the gym, the culture, whats offered etc.</p>
        <h1>Instructors</h1>
        <p> Here we will put a short bio on Eddie, his experience, qualifcations, Background etc. We will explain what he has to offer to customers and people new to CrossFit and the benfits. Later we will add addtion instructors.</p>
        <h1>Schedule</h1>
        <p> Here we will list the current schedule for classes etc. I think I will insert a fancy calander graphic here so its nice and clear.</p>
        <h1>Pricing and Plans</h1>
        <p> Here I will list current pricing and membership plans etc. As well as deals for new customers and deals for trying out CrossFit as well as a few rules like getting people to phone or text 24 hours in advance if they wish to try out a free class so that Eddie will have time to familarize them with the eqiupment, class structure and to get a idea of where they are fitness wise etc, see where they stand. </p>
        <a href="https://journal.crossfit.com" target="_blank" title="CrossFit Journal: The Performance-Based Lifestyle Resource"><img src="https://de45qwmlmgefw.cloudfront.net/badges/black-300x150.png" width="300px" height="150" alt="CrossFit Journal: The Performance-Based Lifestyle Resource" /></a>
        <SocialMob/>
      </Container>

    );
  }
}
