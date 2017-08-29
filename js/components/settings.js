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

        <h2>Music location</h2>

        <label className="browse">
          <input type="file" className="hidden"/>
          <img src="./img/folder.svg" />
          <span>browse</span>
        </label>

        <h2>Color</h2>

        <div className="colorContainer">
          <label className="color">
              <input type="radio" name="color" className="hidden" value="TealLove" defaultChecked onClick={() => this.props.appState({color: 'TealLove'})}/>
            <div className="TealLove"></div>
          </label>

          <label className="color">
              <input type="radio" name="color" className="hidden" value="Reef" onClick={() => this.props.appState({color: 'Reef'})}/>
            <div className="Reef"></div>
          </label>

          <label className="color">
              <input type="radio" name="color" className="hidden" value="LightOrange" onClick={() => this.props.appState({color: 'LightOrange'})}/>
            <div className="LightOrange"></div>
          </label>
        </div>




      </div>
    )
  }
}
