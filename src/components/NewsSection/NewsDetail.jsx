import React, {Component} from 'react'
import './News.css'
import {NewsDetailProps} from './News.jsx'
import {NewsDetail_1,NewsDetail_2,NewsDetail_3,NewsDetail_4,NewsDetail_5,NewsDetail_6,NewsDetail_7,NewsDetail_8} from './NewsDetailsData'




class News1 extends Component {render(){
    const New_1 = NewsDetail_1.map(dt => <NewsDetailProps date={dt.date} title={dt.title}
       content_1={dt.content_1} img_1={dt.img_1} content_2={dt.content_2} content_3={dt.content_3}
       img_2={dt.img_2} content_4={dt.content_4} content_5={dt.content_5} content_5={dt.content_6}/> )
   return(<>{New_1}</>
   )}}

class News2 extends Component {render(){
    const New_1 = NewsDetail_2.map(dt => <NewsDetailProps date={dt.date} title={dt.title}
       content_1={dt.content_1} img_1={dt.img_1} content_2={dt.content_2} content_3={dt.content_3}
      img_2={dt.img_2} content_4={dt.content_4} content_5={dt.content_5} content_6={dt.content_6}/> )
  return(<>{New_1}</>
  )}}

 class News3 extends Component {render(){
     const New_1 = NewsDetail_3.map(dt => <NewsDetailProps date={dt.date} title={dt.title}
        content_1={dt.content_1} img_1={dt.img_1} content_2={dt.content_2} content_3={dt.content_3}
        img_2={dt.img_2} content_4={dt.content_4} content_5={dt.content_5} content_6={dt.content_6}/> )
    return(<>{New_1}</>
    )}}

 class News4 extends Component {render(){
   const New_1 = NewsDetail_4.map(dt => <NewsDetailProps date={dt.date} title={dt.title}
      content_1={dt.content_1} img_1={dt.img_1} content_2={dt.content_2} content_3={dt.content_3}
      img_2={dt.img_2} content_4={dt.content_4} content_5={dt.content_5} content_6={dt.content_6}/> )
  return(<>{New_1}</>
  )}}

 class News5 extends Component {render(){
   const New_1 = NewsDetail_5.map(dt => <NewsDetailProps date={dt.date} title={dt.title}
      content_1={dt.content_1} img_1={dt.img_1} content_2={dt.content_2} content_3={dt.content_3}
      img_2={dt.img_2} content_4={dt.content_4} content_5={dt.content_5} content_6={dt.content_6}/> )
  return(<>{New_1}</>
  )}}

 class News6 extends Component {render(){
   const New_1 = NewsDetail_6.map(dt => <NewsDetailProps date={dt.date} title={dt.title}
      content_1={dt.content_1} img_1={dt.img_1} content_2={dt.content_2} content_3={dt.content_3}
      img_2={dt.img_2} content_4={dt.content_4} content_5={dt.content_5} content_6={dt.content_6}/> )
  return(<>{New_1}</>
  )}}

class News7 extends Component {render(){
  const New_1 = NewsDetail_7.map(dt => <NewsDetailProps date={dt.date} title={dt.title}
     content_1={dt.content_1} img_1={dt.img_1} content_2={dt.content_2} content_3={dt.content_3}
     img_2={dt.img_2} content_4={dt.content_4} content_5={dt.content_5} content_6={dt.content_6}/> )
 return(<>{New_1}</>
 )}}

class News8 extends Component {render(){
  const New_1 = NewsDetail_8.map(dt => <NewsDetailProps date={dt.date} title={dt.title}
     content_1={dt.content_1} img_1={dt.img_1} content_2={dt.content_2} content_3={dt.content_3}
     img_2={dt.img_2} content_4={dt.content_4} content_5={dt.content_5} content_6={dt.content_6}/> )
 return(<>{New_1}</>
 )}}



export {News1,News2,News3,News4,News5,News6,News7,News8}
