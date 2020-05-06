import React, { Component } from 'react'
import Intro from './components/Intro'
import EntireQuiz from './components/EntireQuiz';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showEntireQuiz: false
    }
    this._onStartClick = this._onStartClick.bind(this)
  }

  renderIntro() {
    return <Intro _onStartClick={this._onStartClick} />
  }

  renderEntireQuiz() {
    return <EntireQuiz />
  }

  render() {
    let showEntireQuiz = this.state.showEntireQuiz
    if (showEntireQuiz) {
      return this.renderEntireQuiz()
    }
    return this.renderIntro()
  }

  _onStartClick() {
    this.animateOut()
    setTimeout(() => this.setState({ showEntireQuiz: !this.state.showEntireQuiz }), 1000)
  }
}
export default App;
