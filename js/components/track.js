// Librairies
import React from 'react'
import ReactDOM from 'react-dom'
import path from 'path'

// Components




export default class Track extends React.Component {

  constructor (){
    super()
    this.state = {

    }
  }

  play() {
    this.props.appState({
      song: this.props.path
    })
  }

  render() {
    return (
      <div className={this.props.active === true ? 'track active' : 'track'}>
        <h1>
          {path.parse(this.props.path).name}
        </h1>

        <h2>
          "artist"
        </h2>

        <h3>
          "album"
        </h3>

        <button onClick={() => this.play()}>
          <img src="img/play.svg" />
        </button>
      </div>
    )
  }
}
