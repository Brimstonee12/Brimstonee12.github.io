import React, {Component} from 'react'
import '../Planets.css'
import {StarsRankingsData,BlackHolesRankingsData} from './RankingsData'
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

export {StarsRanking,BlackHolesRanking}
