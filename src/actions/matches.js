/* global fetch:false */
import { config } from '../config/config'
const apiUrl = config.API_URL

export const fetchMatches = () => {
  return dispatch => {
    return fetch(apiUrl + 'matches')
      .then(response => response.json())
      .then(json => dispatch(setMatches(json)))
  }
}

export const setMatches = (matches) => ({
  type: 'SET_SPORTS',
  matches: matches
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})