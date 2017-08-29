// Librairies
import React from 'react'
import ReactDOM from 'react-dom'

// Components




export default class Player extends React.Component {

  constructor (){
    super()
    this.state = {

    }
  }

  previous() {

  }

  play() {

  }

  next() {

  }


  random() {

  }

  mute() {

  }

  folder() {

  }


  render() {
    return (
      <div className="playerSection">

        <div className="infos">
          <h1>
            Another brick in the wall
          </h1>

          <h2>
            Pink Floyd
          </h2>
        </div>





        <div className="player">
          <div className="cover" style={{backgroundImage: "url('img/cover.jpg')"}}></div>

          <div className="time">
            <span>
              0:00
            </span>
            /
            <span>
              3:45
            </span>
          </div>

          <div className="progressBar">
            <div className="progress gradient"></div>
          </div>

          <div className="controls">
            <button onClick={() => this.previous()}>
              <img src="./img/previous.svg" />
            </button>

            <button onClick={() => this.play()}>
              <img src="./img/play.svg" />
            </button>

            <button onClick={() => this.next()}>
              <img src="./img/next.svg" />
            </button>
          </div>
        </div>





        <div className="controlsSecondaryContainer">

          <div className="controlsSecondary">
            <button onClick={() => this.random()}>
              <img src="./img/shuffle.svg" />
            </button>

            <button onClick={() => this.mute()}>
              <img src="./img/mute.svg" />
            </button>

            <button onClick={() => this.folder()}>
              <img src="./img/folder.svg" />
            </button>
          </div>


          <div className="volume">
            <input type="range" min="0" max="100" />
          </div>

        </div>




      </div>
    )
  }
}
