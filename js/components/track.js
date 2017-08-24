// Librairies
import React from 'react'
import ReactDOM from 'react-dom'

// Components




export default class Track extends React.Component {

  constructor (){
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className={this.props.active === true ? 'track active' : 'track'}>
        <h1>
          {this.props.title}
        </h1>

        <h2>
          {this.props.artist}
        </h2>

        <h3>
          {this.props.album}
        </h3>

        <button>
          <img src="img/play.svg" />
        </button>
      </div>
    )
  }
}
