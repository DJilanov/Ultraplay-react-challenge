/* global fetch:false */
import { config } from '../config/config'
const apiUrl = config.API_URL

export const fetchSports = () => {
  return dispatch => {
    return fetch(apiUrl + 'matches')
      .then(response => response.json())
      .then(json => dispatch(setSports(json)))
  }
}

export const setSports = (sports) => ({
  type: 'SET_SPORTS',
  sports: sports
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})