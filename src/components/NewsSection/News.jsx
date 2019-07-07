import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Jumbotron,Container, Row, Col, Image, Button,Media } from 'react-bootstrap';
import './News.css';
// import planet from './assets/planet.jpg';
import NewsData from './NewsData'


class News extends Component {
  render(){
    const NewsComponents = NewsData.map(comp => <CardNews key={comp.title}
       img={comp.img} title={comp.title} content={comp.content} />)

    return(
      <Container>
        <Jumbotron>
          <h2>Welcome to Universe Sandbox TM</h2>
          <br/>
          <h3>(Not completed) wiki about Universe and science-related stuff.</h3>
           <br/>
          <h4>Quick Info of what you can find here:</h4>
          <h4>Planets Section: Wiki about Universe,Science, Rankings(TOP lists) etc. </h4>
          <h4>SandBox: Not added yet</h4>
          <h4>For more specific info go to the contact section</h4>
          <p>This site is <a>NOT ACTIVE</a> so news wont be updated</p>
        </Jumbotron>

        <h2> News From Science World </h2>
        <br/>
        {NewsComponents}
      </Container>
    )
  }
}

function CardNews(props) {
  return(
  <div>
    <Media>
      <img className="mr-3" src={props.img}/>
      <Media.Body>
        <h5>{props.title}</h5>
        <p>{props.content}</p>
      </Media.Body>
    </Media>
    <br/>
  </div>
  )
}







export default News
