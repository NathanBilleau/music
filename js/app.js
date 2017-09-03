// Librairies
import React from 'react'
import ReactDOM from 'react-dom'
import config from '..\\config.json'

// Components
import Top from './js/components/top'
import Player from './js/components/player'
import Loading from './js/components/loading'
import Settings from './js/components/settings'
import List from './js/components/list'


class App extends React.Component {

  constructor (){
    super()
    this.state = {
      search: ' ',
      main: 'loading',
      color: '',
      musicFolder: '',
      songId: 0,
      songs: []
    }
  }

  componentWillMount() {
    this.setState({
      color: config.color,
      musicFolder: config.musicFolder
    })
  }

  appState(newState) {
    this.setState(newState)
  }

  render() {

    return (
      <div className={"app " + this.state.color}>

        <div className="mainContainer">
          <Top appState={this.appState.bind(this)} />
          <Loading appState={this.appState.bind(this)} display={this.state.main === 'loading' ? true : false} />
          <Settings appState={this.appState.bind(this)} display={this.state.main === 'settings' ? true : false} />
          <List appState={this.appState.bind(this)} songs={this.state.songs} search={this.state.search} musicFolder={this.state.musicFolder} display={this.state.main === 'list' ? true : false} />
        </div>

        <Player appState={this.appState.bind(this)} songId={this.state.songId} songs={this.state.songs}/>

      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'))
