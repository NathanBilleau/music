// Librairies
import React from 'react'
import ReactDOM from 'react-dom'
import fs from 'fs'
import glob from 'glob'
import path from 'path'

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
      this.props.appState({main: 'list'})
    })

  }

  render() {
    let selection = this.state.files.filter(item => {
      return path.parse(item).name.toLowerCase().search(this.props.search) != -1
    })


    let track = selection.map(i =>
      <Track
      key={i}
      active={false}
      title={path.parse(i).name}
      artist="Pink Floyd"
      album="The Wall" />
    )

    return (
      <div className={this.props.display === true ? "mainSection list" : "mainSection list hidden"}>
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
