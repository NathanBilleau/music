// Librairies
import React from 'react'
import ReactDOM from 'react-dom'
import fs from 'fs'

// Components
import Track from './track'



export default class List extends React.Component {

  constructor (){
    super()
    this.state = {

    }
  }



  render() {
    return (
      <div className="mainSection list">
        <div className="filter">
          <label>
            <input type="radio" name="filter" checked/>
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

        <Track active={true} title="Another Brick in The Wall" artist="Pink Floyd" album="The Wall"/>
        <Track active={false} title="I Shot the Sherif" artist="Bob Marley" album="Gold"/>
        <Track active={false} title="Ramble On" artist="Led Zeppelin" album="MotherShip"/>

      </div>
    )
  }
}
