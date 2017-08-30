// Librairies
import React from 'react'
import ReactDOM from 'react-dom'
import path from 'path'
import fs from 'fs'
import musicmetadata from 'musicmetadata'

// Components




export default class Track extends React.Component {

  constructor (){
    super()
    this.state = {
      song: {}
    }
  }

  componentDidMount() {
    let stream = fs.createReadStream(this.props.path)

    musicmetadata(stream, (err, meta) => {
      if (err) throw err

      let title = meta.title
      let album = meta.album
      let artist = meta.albumartist[0]

      this.setState({
        song: {
          path: this.props.path,
          title,
          album,
          artist
        }
      })

      stream.close()
    })

  }

  play() {
    this.props.appState({
      song: this.state.song
    })
  }

  render() {
    return (
      <div className={this.props.active === true ? 'track active' : 'track'}>
        <h1>
          {this.state.song.title}
        </h1>

        <h2>
          {this.state.song.artist}
        </h2>

        <h3>
          {this.state.song.album}
        </h3>

        <button onClick={() => this.play()}>
          <img src="img/play.svg" />
        </button>
      </div>
    )
  }
}
