import React, { Component } from 'react'
import { Jumbotron,Container,Media,Image } from 'react-bootstrap';
import './News.css';
import NewsData from './NewsData'
import {Link} from 'react-router-dom';


class News extends Component {
  render(){
    const NewsComponents = NewsData.map(comp => <CardNews key={comp.title}
       date ={comp.date} link={comp.link} img={comp.img} title={comp.title} content={comp.content} />)

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


const CardNews = (props) => {
  return (
    <>
  <div className="news-card">
  <Link to={props.link}>
    <Media className="media">
      <Image className="mr-3" alt="" src={props.img}></Image>
      <Media.Body className="media-body">
        <p className="news-date">{props.date}</p>
        <h5>{props.title}</h5>
        <p>{props.content}</p>
      </Media.Body>
    </Media>
  </Link>
  </div>
  <br/>
  </>
)
}

const NewsDetailProps = props => {
  return(
    <>
      <p className="news-date">{props.date}</p>
      <h1>{props.title}</h1>
      <br/>
      <h4>{props.content_First}</h4>
      <Image src={props.img_First} alt="" fluid/>
      <h4>{props.content_Second}</h4>
      <Image src={props.img_Second} alt="" fluid/>
      <h4>{props.content_Third}</h4>
    </>
  )
}





export {News,NewsDetailProps}
