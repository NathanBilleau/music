// Librairies
import React from 'react'
import ReactDOM from 'react-dom'

// Components




export default class Loading extends React.Component {

  constructor (){
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className={this.props.display === true ? "mainSection loading" : "mainSection loading hidden"} >
        <img src="./img/vinyl.svg"/>
      </div>
    )
  }
}
