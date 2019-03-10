import React from 'react'
import { match } from '../types';

const Match = ({ name, startDate, matchType, bet }) => {
  return (
    <li> 
      <div>
        <div>Name: {name}</div>
        <div>StartDate: {startDate}</div>
        <div>MatchType: {matchType}</div>
        {/* <span>Bet: {bet}</span> */}
      </div>
    </li>
  )
}

Match.propTypes = match;

export default Match
