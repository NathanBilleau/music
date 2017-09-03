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
      artist: 'Unknown Artist',
      picture: false
    }


    musicmetadata(stream, (err, meta) => {
      if (err) throw err

      song.title = meta.title
      song.album = meta.album
      song.artist = meta.albumartist[0]
      song.picture = meta.picture[0].data

      this.setState({
        song
      })

      stream.close()
    })

      setTimeout(() => {
        this.props.appState({
          songs: [...this.props.songs, this.state.song]
        })     
      }, 100)

  

  }

  play() {

    if (Object.keys(this.state.song.picture).length != 0) {

      let coverFile = __dirname + '/../../img/cover/' + this.state.song.album + '.png'
      let coverFileTmp = __dirname + '/../../img/cover.png'

      fs.writeFile(coverFileTmp, this.state.song.picture, (err) => {
        if (err) throw err

        fs.createReadStream(coverFileTmp).pipe(
          fs.createWriteStream(coverFile)
        )

      })

    }


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
