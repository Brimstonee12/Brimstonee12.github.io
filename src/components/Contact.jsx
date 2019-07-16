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
        <h2>This is not fully made website-project, The Website is dynamically updated</h2>
        <hr/>
        <div className="Contact-Section">
        <h2>Email: brimstonee12@gmail.com</h2>
        <h2>GitHub: <a href="https://github.com/Brimstonee12" target="_blank"  rel="noopener noreferrer">https://github.com/Brimstonee12</a></h2>
        <h4>This Website is made with ReactJS , React-Bootstrap. It's only a static version of website and its not gonna be published but in the other hand
        there will be other site with the same desing but with backend(django) and redux added in which will be published.</h4>
        </div>
      </>

    )
  }
}

export default Contact
