// Librairies
import React from 'react'
import fs from 'fs'
import glob from 'glob'
import path from 'path'

// Components
import Track from './track'



export default class List extends React.Component {

  constructor (){
    super()
    this.state = {
      files: []
    }
  }

  componentDidMount() {
    glob(this.props.musicFolder + "\\**\\*.mp3", (err, files) => {
      this.setState({files})
      this.props.appState({main: 'list'})
    })

  }

  render() {
    let selection = this.state.files.filter(item => {
      return path.parse(item).name.toLowerCase().search(this.props.search) != -1
    })

    let track = this.state.files.map((item, i) =>
      <Track
      key={i}
      id={i}
      appState={this.props.appState}
      songs={this.props.songs}
      path={item}
      search={this.props.search}
      active={this.props.songId === i ? true : false} />
    )

    return (
      <div className={this.props.display === true ? "mainSection list" : "mainSection list hidden"}>

        {track}

      </div>
    )
  }
}
