// Librairies
import React from 'react'
import ReactDOM from 'react-dom'

// Components




export default class Top extends React.Component {

  constructor (){
    super()
    this.state = {

    }
  }

  submit() {
    let searchField = document.getElementById('searchField').value.toLowerCase()
    this.props.appState({search: searchField})
  }

  render() {
    return (
      <div className="topSection">
        <div className="btnContainer">

          <button>
            <img src="./img/settings.svg" />
          </button>

          <button>
            <img src="./img/refresh.svg" />
          </button>

        </div>
        <div className="search">

          <input type="text" placeholder="Music title" id="searchField" onChange={() => this.submit()} />

          <button className="gradient" onClick={() => this.submit()}>
            <img src="./img/search.svg" />
          </button>

        </div>
      </div>
    )
  }
}
