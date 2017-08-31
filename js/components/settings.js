// Librairies
import React from 'react'
import ReactDOM from 'react-dom'
import fs from 'fs'
import path from 'path'
import config from '..\\..\\..\\config.json'

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

  color(gradient) {
    this.props.appState({
      color: gradient
    })

    config.color = gradient

    // ecrire dans le fichier
    fs.writeFileSync(__dirname + '\\..\\..\\..\\config.json', JSON.stringify(config, null, '\t'), err => {
      console.log(err)
    })
  }

  componentWillMount() {
    this.setState({
      color: config.color
    })
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
          <input type="file" className="hidden"/>
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
