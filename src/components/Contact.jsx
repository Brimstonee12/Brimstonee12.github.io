import React, {Component} from 'react'
import {Jumbotron} from 'react-bootstrap'
import '../App.css'


class Contact extends Component {
  render(){
    return(
      <>
        <Jumbotron>
          <h1>Contact Section</h1>
        </Jumbotron>
        <br/>
          <h4>This Website is made with ReactJS , React-Bootstrap.</h4>
        <hr/>
        <div className="Contact-Section">
        <h2>Email: brimstonee12@gmail.com</h2>
        <h2>GitHub: <a href="https://github.com/Brimstonee12" target="_blank" rel="noopener noreferrer">https://github.com/Brimstonee12</a></h2>
        <h2>LinkedIn: <a href="https://www.linkedin.com/in/tomasz-karli%C5%84ski-1b36b717a/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/tomasz-karli%C5%84ski-1b36b717a/</a></h2>
        </div>
      </>

    )
  }
}

export default Contact
