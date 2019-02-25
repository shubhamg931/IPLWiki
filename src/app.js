import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from './containers/List'
import Stats from './containers/Stats'
import Year from './containers/Year'
import Navbar from "./components/Navbar";

function mapStateToProps(state) {
  return {}
}

class App extends Component {
  render() {
    return (
      <div>
        <h6>Social Cops Challenge - IPL Trivia</h6>
        <div className="row">
          <div className="col m12 s12">
            <Year/>
          </div>
          <div className="col m2 z-depth-3 s12">
            <List />
          </div>
          <div className="col m10 s12">
            <Stats />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(App);
