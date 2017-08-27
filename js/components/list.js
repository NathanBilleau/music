// Librairies
import React from 'react'
import ReactDOM from 'react-dom'
import fs from 'fs'
import glob from 'glob'
import path from 'path'
import ffmetadata from 'ffmetadata'

// Components
import Track from './track'



export default class List extends React.Component {

  constructor (){
    super()
    this.state = {
      files: [],
      tracks: []
    }
  }

  componentDidMount() {
    glob('C:\\Users\\Nathan\\Music\\**\\*.mp3', (err, files) => {
      this.setState({files})

      files.map(i => {
        ffmetadata.read(i, function(err, data) {
        	if (err) console.error("Error reading metadata", err)
        	else console.log(data)
        })
      })
    })   


  }

  render() {

    let track = this.state.files.map(i =>
      <Track
      key={i}
      active={false}
      title={path.parse(i).name}
      artist="Pink Floyd"
      album="The Wall"/>
    )

    return (
      <div className="mainSection list">
        <div className="filter">
          <label>
            <input type="radio" name="filter" defaultChecked/>
            <span>Title</span>
          </label>

          <label>
            <input type="radio" name="filter"/>
            <span>Artist</span>
          </label>

          <label>
            <input type="radio" name="filter"/>
            <span>Album</span>
          </label>
        </div>

        {track}

      </div>
    )
  }
}
