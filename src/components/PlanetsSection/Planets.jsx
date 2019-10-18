import React, {Component} from 'react'
import {Button, Container, Jumbotron} from 'react-bootstrap'
import './Planets.css'
import SolarSystemData from './SolarSystem/SolarData'
import {SolarSystemCards} from './PlanetsProps'


class Planets extends Component {
    state ={
      isOpen: false,
      isOpen2: false
    }

  onClick = (isOpen) => {
    this.setState(prevState => {return{isOpen: !prevState.isOpen}})
  }
  onClick2 = (isOpen) => {
    this.setState(prevState => {return{isOpen2: !prevState.isOpen2}})
  }
  onClick3 = (isOpen) =>{
    this.setState(prevState => {return{isOpen3: !prevState.isOpen3}})
  }


  render(){
    const SolarData = SolarSystemData.map(solar => <SolarSystemCards link={solar.link} key={solar.title}
       img={solar.img} title={solar.title} /> )


    return(
  <Container>
    <br/>
      <Jumbotron>
        <h2> Welcome to Planets Section</h2>
      </Jumbotron>
    <br/>

    <Button className="WikiButton" variant="secondary" size="lg" onClick={this.onClick} block>Solar System</Button>
      {this.state.isOpen === true ?
        SolarData:
        null }

        <br/>

    <Button className="WikiButton" variant="secondary" size="lg" onClick={this.onClick2} block>Rankings</Button>
      {this.state.isOpen2 === true ?
        <div className="buttonblock">
          <Button className="ranking-button" href="/stars-ranking" size="lg" onClick=""> Top 10 Stars</Button>
          <Button className="ranking-button" href="/blackholes-ranking" size="lg" onClick=""> Top 10 Black Holes</Button>
          <Button className="ranking-button" href="/planets-ranking" size="lg" onClick=""> Top 10 Planets</Button>
          <Button className="ranking-button" href="/btelescopes-ranking" size="lg" onClick=""> Top 5 Biggest Telescopes</Button>
          <Button className="ranking-button" href="" size="lg" onClick=""> Top 10 Home Telescopes</Button>
        </div>:
        null }
    <br/>
    <Button className="WikiButton" variant="secondary" size="lg" onClick={this.onClick3} block>Something</Button>
      {this.state.isOpen3 === true ?
      <div className="buttonblock">
        <Button className="ranking-button" onClick=""> CLick</Button>
        <a href='/planets'>Test</a>
      </div>:
      null }
  </Container>
    )
  }
}




export default Planets
