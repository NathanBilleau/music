// Librairies
import React from 'react'
import path from 'path'
import {shell} from 'electron'
import fs from 'fs'
import musicmetadata from 'musicmetadata'

// Components


function secondsToMinutes(time){
    return Math.floor(time / 60)+':'+Math.floor(time % 60);
}

export default class Player extends React.Component {

  constructor (){
    super()
    this.state = {
      button: 'pause',
      volume: 0.3,
      duration: 0,
      current: 0,
      song: {}
    }
  }

  componentDidMount() {
    let audioPlayer = document.getElementById('audioPlayer')
    let audioVolume = document.getElementById('audioVolume')
    let audioSeek = document.getElementById('audioSeek')

    audioPlayer.volume = this.state.volume
    cover.style.backgroundImage = 'none'
  }

  newSong() {

    this.setState({song: this.props.songs[this.props.songId]})

    if (typeof this.state.song.picture != 'undefined') {

      let coverFile = __dirname + '/../../img/cover/' + this.state.song.album + '.png'
      let coverFileTmp = __dirname + '/../../img/cover.png'

      fs.writeFile(coverFileTmp, this.state.song.picture, (err) => {
        if (err) throw err

        fs.createReadStream(coverFileTmp).pipe(
          fs.createWriteStream(coverFile)
        )
      })
    }


  }


  play() {
    if (audioPlayer.paused) {
      audioPlayer.play()
      this.setState({
        button: 'pause'
      })
    }
    else {
      audioPlayer.pause()
      this.setState({
        button: 'play'
      })
    }

  }


  previous() {
    let currentIndex = this.state.song.id - 1
    this.props.appState({songId: currentIndex})
  }

  next() {
    let currentIndex = this.state.song.id + 1
    this.props.appState({songId: currentIndex})
  }


  random() {
    this.props.appState({random: true})
  }

  mute() {
    if (audioPlayer.volume != 0) {
      this.setState({
        volume: 0
      })
      audioPlayer.volume = 0
    }
    else{
      this.setState({
        volume: 0.5
      })
      audioPlayer.volume = 0.5
    }

  }

  folder() {
    shell.showItemInFolder(this.state.song.path)
  }

  volume() {
    this.setState({
      volume: audioVolume.value
    })


    audioPlayer.volume = this.state.volume
  }

  progress() {
    if (decodeURI(audioPlayer.src).replace('file:///', '') != this.state.song.path || Object.keys(this.state.song.path).length === 0) {
      this.newSong()
    }

    let duration = audioPlayer.duration
    let current = audioPlayer.currentTime

    cover.style.backgroundImage = 'none'
    if (typeof this.state.song.picture != 'undefined') {
        cover.style.backgroundImage = 'url("./img/cover/' + this.state.song.album + '.png")'
    }

    this.setState({
      duration,
      current
    })
  }

  seek() {
    let seek = audioSeek.value
    audioPlayer.currentTime = seek
  }

  render() {
    let audio

    if (typeof this.props.songs[this.props.songId] != 'undefined') {
      audio = <audio src={this.props.songs[this.props.songId].path} className="hidden" id="audioPlayer" autoPlay onTimeUpdate={() => this.progress()}></audio>
    }
    else{
      audio = <audio className="hidden" id="audioPlayer" autoPlay onTimeUpdate={() => this.progress()}></audio>
    }



    return (
      <div className="playerSection">

        {audio}

        <div className="infos">
          <h1>
            {this.state.song.title}
          </h1>

          <h2>
            {this.state.song.artist}
          </h2>
        </div>





        <div className="player">
          <div className="cover" id="cover"></div>

          <div className="time">
            <span>
              {secondsToMinutes(this.state.current)}
            </span>
            /
            <span>
              {secondsToMinutes(this.state.duration)}
            </span>
          </div>

          <input type="range" min="0" max={this.state.duration} id="audioSeek" className="progressbar gradient" value={this.state.current} onChange={() => this.seek()} />

          <div className="controls">
            <button onClick={() => this.previous()}>
              <img src="./img/previous.svg" />
            </button>

            <button onClick={() => this.play()}>
              <img src={"./img/" + this.state.button + ".svg"} />
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
            <input type="range" min="0" max="1" step="0.001" value={this.state.volume} id="audioVolume" onChange={() => this.volume()}/>
          </div>

        </div>




      </div>
    )
  }
}
