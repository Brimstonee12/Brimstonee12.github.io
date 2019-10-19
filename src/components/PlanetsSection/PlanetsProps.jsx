import React from 'react'
import {Container,Image} from 'react-bootstrap'
import './Planets.css'
import {Link} from 'react-router-dom';



function SolarSystemCards(props) {
  return(
  <Link to={props.link} className="solarblock">
      <img className="solar-img" alt="" src={props.img}/>
      <h3>{props.title}</h3>
    <br/>
  </Link>
  )
}


function SolarProps(props) {
  return(
    <Container>
      <Image src={props.img_title} alt="" fluid/>
      <h1 className="h1-detail">{props.title_1}</h1>
      <br/>
      <h4>{props.content_1}</h4>
      <Image src={props.img_1} alt="" fluid />
      <p>{props.img_content_1}</p>
      <h4>{props.content_2}</h4>
      <br/>
      <h4>{props.content_3}</h4>
      <br/>

      <h2>{props.title_2}</h2>
      {props.title_2.length > 0 ?
      <hr/>:
       null}
      <h4>{props.content_4}</h4>
      <Image src={props.img_2} alt="" fluid />
      <p>{props.img_content_2}</p>
      <br/>
      <h4>{props.content_5}</h4>
      <br/>
      <h4>{props.content_6}</h4>
      <br/>
      <h4>{props.content_7}</h4>
      <br/>

      <h2>{props.title_3}</h2>
      {props.title_3.length > 0 ?
      <hr/>: null}
      <h4>{props.content_8}</h4>
      <br/>
      <h4>{props.content_9}</h4>
      <Image src={props.img_3} alt="" fluid />
      <p>{props.img_content_3}</p>
      <br/>
      <h4>{props.content_10}</h4>
      <br/>
      <h4>{props.content_11}</h4>
      <br/>

      <h2>{props.title_4}</h2>
      {props.title_4.length > 0 ?
      <hr/>: null}
      <h4>{props.content_12}</h4>
      <br/>
      <h4>{props.content_13}</h4>
      <Image src={props.img_4} alt="" fluid />
      <p>{props.img_content_4}</p>
      <br/>
      <h4>{props.content_14}</h4>
      <br/>
      <h4>{props.content_15}</h4>
      <br/>
      </Container>
    )
    }

function RankingButtonsProps(props){
  return(
    <Link to={props.link}>
      <div class="ranking_button">
      <div class="ranking_button_img">
        <img src={props.img} />
      </div>
      <div class="ranking_button_title">
        <p>{props.title}</p>
      </div>
      </div>
    </Link>
  )
}


function RankingProps(props) {
  return(
  <Container>
    <br/>
    <h1 className="text-left" >{props.title_ranking}</h1>
    <Image src={props.img_ranking} className="rank-img" alt="" fluid/>
    <h4>{props.content_ranking}</h4>
    <br/>
    <hr/>

    </Container>
  )
  }

export {SolarSystemCards,SolarProps,RankingProps,RankingButtonsProps}
