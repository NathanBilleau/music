// Librairies
import React from 'react'
import fs from 'fs'
import path from 'path'
// import {dialog} from 'electron'
import config from '..\\..\\..\\config.json'
import {remote} from 'electron'
// Components




export default class Settings extends React.Component {

  constructor (){
    super()
    this.state = {
      color: ''
    }
  }

  close() {
    this.props.appState({
      main: 'list'
    })
  }

  configUpdate() {
    fs.writeFileSync(__dirname + '\\..\\..\\..\\config.json', JSON.stringify(config, null, '\t'), err => {
      if (err) throw err
    })
  }

  color(gradient) {
    this.props.appState({
      color: gradient
    })

    config.color = gradient

    this.configUpdate()
  }

  componentWillMount() {
    this.setState({
      color: config.color
    })
  }


  browse() {
    let dir = remote.dialog.showOpenDialog({properties: ['openDirectory']})[0]
    config.musicFolder = dir
    this.props.appState({
      musicFolder: dir
    })
    this.configUpdate()
  }




  render() {

    return (
      <div className={this.props.display === true ? "mainSection settings" : "mainSection settings hidden"}>

        <button className="closeBtn" onClick={() => this.close()}>
          <img src="./img/close.svg" />
        </button>

        <h1>Settings</h1>

        <h2>Music location</h2>

        <label className="browse">

          <input type="button" className="hidden" onClick={() => this.browse()} />

          <img src="./img/folder.svg" />
          <span>browse</span>
        </label>

        <h2>Color</h2>

        <div className="colorContainer">
          <label className="color">
              <input type="radio" name="color" className="hidden" value="TealLove" defaultChecked={this.state.color === 'TealLove' ? true : false} onClick={() => this.color('TealLove')}/>
            <div className="TealLove"></div>
          </label>

          <label className="color">
              <input type="radio" name="color" className="hidden" value="Reef" defaultChecked={this.state.color === 'Reef' ? true : false} onClick={() => this.color('Reef')}/>
            <div className="Reef"></div>
          </label>

          <label className="color">
              <input type="radio" name="color" className="hidden" value="LightOrange" defaultChecked={this.state.color === 'LightOrange' ? true : false} onClick={() => this.color('LightOrange')}/>
            <div className="LightOrange"></div>
          </label>
        </div>




      </div>
    )
  }
}
