import { LOAD_DATA, SHOW_STATS } from '../actions/types'

const INITIAL_STATE = {data: {}, graphType: "Pie", values: {}, plot: {team:["Loading"],values:[100]}}

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_DATA:
      return {...state, data: action.payload}
    case SHOW_STATS:
      return {...state, plot: action.payload}
    default:
      return state
  }
}
