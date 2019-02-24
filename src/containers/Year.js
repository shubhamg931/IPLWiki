import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from "../actions";

function mapStateToProps(state) {
  return {
    year: state.year,
    all:state
  }
}

class Year extends Component {

  selectYear = async (year) => {
    console.log("year function called!");
    await this.props.selectYear(year);

    this.props.showStats(this.props.all);
  }

  renderYear = () => {
    let years = ["2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "All Time"]
    return(
      years.map((year) => {
        if(year === "All Time"){
          if(2017 === this.props.year.value){
            return (
              <div className="col m3 z-depth-2 s6" style={{ cursor: "pointer", padding: 5, color:"teal", fontWeight: 700}} onClick={() => this.selectYear(year)}
                   key={year}>
                {year}
              </div>
            )
          }else {
            return (
              <div className="col m3 z-depth-2 s6" style={{ cursor: "pointer", padding: 5}} onClick={() => this.selectYear(year)}
                   key={year}>
                {year}
              </div>
            )
          }
        }else {
          if(year === this.props.year.value) {
            return (
              <div className="col m1 z-depth-2 s2" style={{ cursor: "pointer", padding: 5, color:"teal", fontWeight: 700}} onClick={() => this.selectYear(year)}
                   key={year}>
                {year}
              </div>
            )
          }
          else {
            return (
              <div className="col m1 z-depth-2 s2" style={{ cursor: "pointer", padding: 5 }} onClick={() => this.selectYear(year)}
                   key={year}>
                {year}
              </div>
            )
          }
        }
      })
    )
  }

  render() {
    return (
      <div>
        <div className="row" style={{marginBottom: "0px"}}>
          {this.renderYear()}
        </div>
        <div className="row">
          <div className="col m12 z-depth-2 s12">
            <h1>{this.props.year.value} Statistics</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps, actions
)(Year)
