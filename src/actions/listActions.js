import { SELECT_ITEM } from './types'

export const selectItem = (val) => {
  return ({type: SELECT_ITEM, payload: val});
}
