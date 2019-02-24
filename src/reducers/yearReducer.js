import { SELECT_YEAR } from '../actions/types'

const INITIAL_STATE = {value: "2016"};

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_YEAR:
      return {...state, value: action.payload}
    default:
      return state;
  }
}
