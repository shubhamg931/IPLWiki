import React, { Component } from 'react'
import * as Chart from "chart.js";
import { connect } from 'react-redux'
import { Doughnut, HorizontalBar, Pie } from 'react-chartjs-2'
import * as actions from "../actions"
import * as Papa from 'papaparse'

function mapStateToProps(state) {
  return {
    data: state.stats.data,
    plot: state.stats.plot,
    list: state.list,
    all: state
  }
}

  class Stats extends Component {

  constructor(props){
    super(props);
  }

  returnTeam = () => {
    return this.props.plot.team;
  }

  async componentDidMount() {
    await this.props.loadData()
    // console.log("DATA: " + JSON.stringify(this.props.data));
    this.props.showStats(this.props.all)
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col m12 s12">
            <h1>{this.props.list.item}</h1>
          </div>
          <div className="col m6 s12">
            <HorizontalBar
              height={200} data={{
              labels: this.props.plot.team,
              datasets: [
                {
                  label: this.props.list.item + ' of each team',
                  backgroundColor: 'rgba(255,99,132,0.2)',
                  borderColor: 'rgba(255,99,132,1)',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                  hoverBorderColor: 'rgba(255,99,132,1)',
                  data: this.props.plot.values
                }
              ]
            }} />
          </div>
          <div className="col m6 s12">
            <Doughnut
              height={250}
              data={{
              labels: this.props.plot.team,
              datasets: [{
                data: this.props.plot.values,
                backgroundColor: [
                  '#f44336',
                  '#e91e63',
                  '#9c27b0',
                  '#673ab7',
                  '#3f51b5',
                  '#2196f3',
                  '#03a9f4',
                  '#00bcd4',
                  '#009688',
                  '#4caf50',
                  '#8bc34a',
                  '#cddc39',
                  '#ffeb3b',
                ],
                hoverBackgroundColor: [
                  '#f44336',
                  '#e91e63',
                  '#9c27b0',
                  '#673ab7',
                  '#3f51b5',
                  '#2196f3',
                  '#03a9f4',
                  '#00bcd4',
                  '#009688',
                  '#4caf50',
                  '#8bc34a',
                  '#cddc39',
                  '#ffeb3b',
                ]
              }]
            }} />
          </div>
        </div>

      </div>
    )
  }
}

export default connect(
  mapStateToProps, actions
)(Stats)
