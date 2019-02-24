import { SELECT_YEAR } from './types'

export const selectYear = (val) => {
  if(val === 'All Time')
    val = 2017;
  return ({type: SELECT_YEAR, payload: val});
}
