// Librairies
import React from 'react'
import ReactDOM from 'react-dom'

// Components
import Top from './js/components/top'
import Player from './js/components/player'
import Loading from './js/components/loading'
import List from './js/components/list'


class App extends React.Component {

  constructor (){
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="app">

        <div className="mainContainer">
          <Top />
          <List />
        </div>

        <Player />

      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'))
