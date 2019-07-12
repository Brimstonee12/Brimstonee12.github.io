import React, {Component} from 'react'
import {Button,Container,Image} from 'react-bootstrap'
import './Planets.css'
import SolarSystemData from './SolarSystem/SolarData'
import {Link} from 'react-router-dom';
import Planets from './Planets'


function SolarSystemCards(props) {
  return(
  <Link to={props.link} className="solarblock">
      <img className="solar-img" src={props.img}/>
      <h3>{props.title}</h3>
    <br/>
  </Link>
  )
}


function SolarProps(props) {
  return(
    <Container>
      <Image src={props.img_title}  fluid/>
      <h1 className="h1-detail">{props.title}</h1>
      <br/>
      <h4>{props.content_first}</h4>
      <Image src={props.img_center}  fluid />
      <h4>{props.content_center}</h4>
      <br/>

    </Container>
  )
}


function RankingProps(props) {
  return(
  <Container>
    <br/>
    <h1 className="text-left" >{props.title_ranking}</h1>
    <Image src={props.img_ranking} fluid/>
    <h4>{props.content_ranking}</h4>
    <br/>
    <hr/>

    </Container>
  )
  }

export {SolarSystemCards,SolarProps,RankingProps}
