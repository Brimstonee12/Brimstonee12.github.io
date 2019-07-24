import React, {Component,Suspense} from 'react'
import './App.css'
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import News from './components/NewsSection/News'
import Planets from './components/PlanetsSection/Planets'
import CustomNavbar from './components/CustomNavbar'
import {Container} from 'react-bootstrap'
import {SunDetails, MercuryDetails, VenusDetails,EarthDetails,MarsDetails,JupiterDetails,SaturnDetails,UranusDetails,NeptuneDetails } from './components/PlanetsSection/SolarSystem/SolarDetails'
import {StarsRanking,BlackHolesRanking,BiggestTelescopesRanking,PlanetsRanking} from './components/PlanetsSection/RankingSystem/Rankings'
import Contact from './components/Contact'



class App extends Component {
  render() {

    return(
      <Router>
        <Container>
          <CustomNavbar />
          <br/>
          {/* NAVBAR ROUTES */}
          <Suspense fallback={<div>Loading...</div>}>
          <Switch>
          <Route exact path="/" component={News} />
          <Route path="/planets" component={Planets} />
          <Route path="/contact" component={Contact} />

          {/* SOLAR SYSTEM DATAILS */}
          <Route path="/sun-details" component={SunDetails} />
          <Route path="/mercury-details" component={MercuryDetails} />
          <Route path="/venus-details" component={VenusDetails} />
          <Route path="/earth-details" component={EarthDetails} />
          <Route path="/mars-details" component={MarsDetails} />
          <Route path="/jupiter-details" component={JupiterDetails} />
          <Route path="/saturn-details" component={SaturnDetails} />
          <Route path="/uranus-details" component={UranusDetails} />
          <Route path="/neptune-details" component={NeptuneDetails} />

          {/* RANKINGS */}
          <Route path="/stars-ranking" component={StarsRanking} />
          <Route path="/blackholes-ranking" component={BlackHolesRanking} />
          <Route path="/btelescopes-ranking" component={BiggestTelescopesRanking} />
          <Route path="/planets-ranking" component={PlanetsRanking} />

          </Switch>
          </Suspense>
        </Container>
      </Router>
    );
  }
}



export default App
