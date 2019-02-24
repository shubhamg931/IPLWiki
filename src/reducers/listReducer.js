import { SELECT_ITEM } from '../actions/types'

const INITIAL_STATE = {item: "Runs"};

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_ITEM:
      return {...state, item: action.payload};
    default:
      return state;
  }
}
