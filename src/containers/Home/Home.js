import React, { Component, ProtoTypes } from 'react';
import { Container, Relative } from '../../theme/grid';
import { Image, Image2, Image3, Background, Img, Title, Panels, Panel, Schedule, Journal, Gallery } from './Home.style';
import YouTube from 'react-youtube';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import SocialMob from '../../components/Social/SocialMob';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

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


 const images = [
      {
        original: require('../../assets/eddie2.JPG'),
        thumbnail: require('../../assets/eddie2.JPG')
      },
      {
        original: require('../../assets/eddie3.JPG'),
        thumbnail: require('../../assets/eddie3.JPG')
      },
      {
        original: require('../../assets/eddie4.JPG'),
        thumbnail: require('../../assets/eddie4.JPG')
      },
      {
        original: require('../../assets/eddie5.JPG'),
        thumbnail: require('../../assets/eddie5.JPG')
      },
      {
        original: require('../../assets/eddie6.JPG'),
        thumbnail: require('../../assets/eddie6.JPG')
      }
    ]



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
      <NavigationBar/>
        <Panels>
          <div className={this.state.panel1} onClick={ this.toggleOpen1 }>
            <YouTube
              videoId={Video.opts1.id}
              opts={Video.opts1}
            />
            <p>What is CrossFit?</p>
            <p>All CrossFit workouts are based on functional movements, and these movements reflect the best aspects of gymnastics, weightlifting, running, rowing and more. These are the core movements of life. </p>
          </div>
        </Panels>
        <Panels>
          <div className={this.state.panel2} onClick={ this.toggleOpen2 }>
            <YouTube
              videoId={Video.opts2.id}
              opts={Video.opts2}
            />
            <p>Who can do it?</p>
            <p>CrossFit is for everyone! Workouts are tailored to every individuals fitness level and abilities on the fly to make sure everyone can get the most out of every workout, regardless of age, gender or fitness level. PowTown CrossFit is a family cultured gym where you are part of a team.</p>
          </div>
        </Panels>
        <Panels>
          <div className={this.state.panel3} onClick={ this.toggleOpen3 }>
            <Image2
              src={require('../../assets/eddie1.JPG')}
              alt="eddie1"/>
            <p>Eddie Charlton (owner/instructor)</p>
            <p>Eddie was born and raised in Powell River. He left at age 20 to attend trade school and is now back in town to bring the best, proven, and flexible fitness regime on the planet, for all ages and genders, to Powell River. Eddie played sports his whole life, primarily Rep Hockey and has always been a avid gym rat. As he hit his mid 20's he got more serious about training, diet, and other great habits he still works on today at 36 years old. When Eddie found Sheepdog CrossFit in Port Coquitlam he was instantly hooked. CrossFit made him feel like he was truly part of a team and a family. He wants to bring that amazing fitness culture to Powell River.</p>
          </div>
        </Panels>
        <h1>Schedule</h1>
        <p> With mulitple classes a day and even private classes available, we are sure you can find the perfect time to get a workout in any day of the week! </p>
        <Schedule
          src={require('../../assets/schedule00.png')}
          alt="schedule"/>

        <h1>Pricing and Plans</h1>
        <p> There are many plans and options for what you are looking for and what fits your schedule. First class is free! Come try it out and see what CrossFit has to offer. Please phone, text, or email 24 hours ahead of time to let Eddie know you are coming so he can assess you and tailor the workout for you that day.   </p>
        <h2>Monthly $120.00 per month (plus taxes)</h2>
        <p> First month is $60.00. This includes unlimited access to classes.</p>
        <h2>10 class punch card - $150 (plus taxes)</h2>
        <p> A 10 class punch card for people in and out of town etc. </p>
        <h2> 1 on 1 personal training $60.00 per hour (plus taxes) </h2>
        <p> 1 on 1 personal training is available. Also for team rates, please call or email. </p>
        <Gallery>
          <ImageGallery
            items={images}
            showThumbnails={true}
          />
        </Gallery>
        <SocialMob/>
        <p>Any Questions? Email Us! Also check out or social media pages, or the CrossFit journal for up to date info!</p>
        <Journal>
        <a href="https://journal.crossfit.com" target="_blank" title="CrossFit Journal: The Performance-Based Lifestyle Resource"><img src="https://de45qwmlmgefw.cloudfront.net/badges/black-300x150.png" width="300px" height="150" alt="CrossFit Journal: The Performance-Based Lifestyle Resource" /></a>
        </Journal>
      </Container>

    );
  }
}
