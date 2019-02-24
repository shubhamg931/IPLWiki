import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from "../actions";

function mapStateToProps(state) {
  return {
    list: state.list,
    all: state
  }
}

class List extends Component {

  selectItem = async (item) => {
    await this.props.selectItem(item);
    // this.props.list.item = item;
    this.props.showStats(this.props.all);
  }


  list = () => {

    let list = ["Runs", "Wickets", "Fours", "Sixes", "Extras"];

    return(
      list.map((name) => {
        if(name === this.props.list.item){
          return(
            <a href="#!" className="collection-item active" onClick={() => this.selectItem(name)} key={name}>
              {name}
            </a>
          )
        }else {
          return (
            <a href="#!" className="collection-item" onClick={() => this.selectItem(name)} key={name}>
              {name}
            </a>
          );
        }
      })
    );
  }

  render() {
    return (
      <div>
        <h5>Trivia List</h5>
        <div className="collection">
          {this.list()}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps, actions
)(List)
