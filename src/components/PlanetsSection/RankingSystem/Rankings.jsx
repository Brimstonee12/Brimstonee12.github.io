import React, {Component} from 'react'
import '../Planets.css'
import {StarsRankingsData,BlackHolesRankingsData,BiggestTelescopesRankingsData,PlanetsRankingsData} from './RankingsData.js'
import {RankingProps} from '../PlanetsProps'


class StarsRanking extends Component {
  render(){
    const StarsRankingData = StarsRankingsData.map(rank => <RankingProps key={rank.title_ranking}
       title_ranking={rank.title_ranking} img_ranking={rank.img_ranking} content_ranking={rank.content_ranking} />)

    return(
      StarsRankingData
    )
  }
}

class BlackHolesRanking extends Component {
  render(){
    const BlackHolesRankinData = BlackHolesRankingsData.map(rank => <RankingProps key={rank.title_ranking}
       title_ranking={rank.title_ranking} img_ranking={rank.img_ranking} content_ranking={rank.content_ranking} />)

    return(
      BlackHolesRankinData
    )
  }
}


class BiggestTelescopesRanking extends Component {
  render(){
    const BTelescopesRankinData = BiggestTelescopesRankingsData.map(rank => <RankingProps key={rank.title_ranking}
       title_ranking={rank.title_ranking} img_ranking={rank.img_ranking} content_ranking={rank.content_ranking} />)

    return(
      BTelescopesRankinData
    )
  }
}


class PlanetsRanking extends Component {
  render(){
    const PlanetsRankinData = PlanetsRankingsData.map(rank => <RankingProps key={rank.title_ranking}
       title_ranking={rank.title_ranking} img_ranking={rank.img_ranking} content_ranking={rank.content_ranking} />)

    return(
      PlanetsRankinData
    )
  }
}


export {StarsRanking,BlackHolesRanking,BiggestTelescopesRanking,PlanetsRanking}
