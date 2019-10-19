import React, {Component} from 'react'
import {Button, Container, Jumbotron} from 'react-bootstrap'
import './Planets.css'
import SolarSystemData from './SolarSystem/SolarData'
import {SolarSystemCards,RankingButtonsProps} from './PlanetsProps'
import {RankingButtonData} from './RankingSystem/RankingButtonsData'

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

    const RankingsButtonsData = RankingButtonData.map(btn => <RankingButtonsProps
      link={btn.link} title={btn.title} img={btn.img}/>)

    return(
  <Container>
      <Jumbotron>
        <h2> Welcome to Wikipedia Section </h2>
      </Jumbotron>

    <br/>

    <Button className="WikiButton" variant="secondary" size="lg" onClick={this.onClick} block>Solar System</Button>
      {this.state.isOpen === true ?
        SolarData:
        null }

    <br/>

    <Button className="WikiButton" variant="secondary" size="lg" onClick={this.onClick2} block>Rankings</Button>
      {this.state.isOpen2 === true ?
        <div className="RankingsBlock">
          {RankingsButtonsData }
        </div>:
        null }

        <br/>

    <Button className="WikiButton" variant="secondary" size="lg" onClick={this.onClick3} block>Physics</Button>
      {this.state.isOpen3 === true ?
      <div className="RankingsBlock">
      
      </div>:
      null }

          <br/>
      <Button className="WikiButton" variant="secondary" size="lg"  block>History</Button>
  </Container>
    )
  }
}




export default Planets
