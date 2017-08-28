// Librairies
import React from 'react'
import ReactDOM from 'react-dom'
import fs from 'fs'
import path from 'path'

// Components




export default class Settings extends React.Component {

  constructor (){
    super()
    this.state = {

    }
  }


  render() {

    return (
      <div className={this.props.display === true ? "mainSection settings" : "mainSection settings hidden"}>

        <h1>Settings</h1>

      </div>
    )
  }
}
