import React, {Component,Suspense} from 'react'
import './App.css'
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import {News} from './components/NewsSection/News'
import Planets from './components/PlanetsSection/Planets'
import CustomNavbar from './components/CustomNavbar'
import {Container} from 'react-bootstrap'
import {SunDetails, MercuryDetails, VenusDetails,EarthDetails,MarsDetails,JupiterDetails,SaturnDetails,UranusDetails,NeptuneDetails } from './components/PlanetsSection/SolarSystem/SolarDetails'
import {StarsRanking,BlackHolesRanking,BiggestTelescopesRanking,PlanetsRanking} from './components/PlanetsSection/RankingSystem/Rankings'
import Contact from './components/Contact'
import {News1,News2,News3,News4,News5,News6} from './components/NewsSection/NewsDetail'


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

          {/* NEWS */}
          <Route path="/news1" component={News1} />
          <Route path="/news2" component={News2} />
          <Route path="/news3" component={News3} />
          <Route path="/news4" component={News4} />
          <Route path="/news5" component={News5} />
          <Route path="/news6" component={News6} />

          </Switch>
          </Suspense>
        </Container>
      </Router>
    );
  }
}



export default App
