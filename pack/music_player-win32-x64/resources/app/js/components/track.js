// Librairies
import React from 'react'
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
    let song = {
      path: this.props.path,
      id: this.props.id,
      title: path.parse(this.props.path).name,
      album: 'Unknown Album',
      artist: 'Unknown Artist'
    }


    musicmetadata(stream, (err, meta) => {
      if (err) throw err

      song.title = meta.title
      song.album = meta.album
      song.artist = meta.albumartist[0]

      //cannot read property 'data' of undefined
      if (typeof meta.picture[0] != 'undefined') {
        song.picture = meta.picture[0].data
      }


      this.setState({
        song
      })

      stream.close()
    })

      setTimeout(() => {
        this.props.appState({
          songs: [...this.props.songs, this.state.song]
        })
      }, 50)



  }

  play() {
    this.props.appState({
      songId: this.state.song.id
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
