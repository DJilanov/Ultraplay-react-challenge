import React from 'react'
import Match from './Match'
import { event } from '../types';

const containerStyling = {
	marginLeft: 'auto'
};

const MatchesList = ({ event }) => (
	event ? <div style={containerStyling}>
		<h3>{event.name}</h3>
		<ul>
			{event.matches.map(match =>
				<Match
					key={match.id}
					{...match}
				/>
			)}
		</ul>
	</div> : null
)

MatchesList.propTypes = {
	event: event.isRequired
}

export default MatchesList
