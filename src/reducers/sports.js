const sports = (state = null, action) => {
  switch (action.type) {
		case 'SET_SPORTS':
			return action.matches.XmlSports.Sport.map(sport => {
				let events = []
				// Map is quite slow function compared to for ( 71% slower on my machine atleast ). If we are going to play with a lot of data in the FE ( not infinity scroll and request base ) we will need to do it as optimized as possible
				// The back-end really should return better structured data for the FE... looks at the console.. its much more readable that way
				for(let counter = 0; counter < sport.Event.length; counter++) {
					events.push({
						id: sport.Event[counter].$.ID,
						categoryId: sport.Event[counter].$.CategoryID,
						isLive: sport.Event[counter].$.IsLive === 'true',
						name: sport.Event[counter].$.Name,
						matches: sport.Event[counter].Match ? sport.Event[counter].Match.map(match => {
							return {
								id: match.$.ID,
								matchType: match.$.MatchType,
								name: match.$.Name,
								startDate: match.$.StartDate,
								bet: match.$.Bet ? match.$.Bet.map(bet => {
									return {
										id: bet.$.ID,
										isLive: bet.$.IsLive === 'true',
										name: bet.$.Name,
										odd: bet.Odd ? bet.Odd.map(odd => {
											return {
												id: odd.$.ID,
												name: odd.$.Name,
												specialBetValue: odd.$.SpecialBetValue,
												value: bet.$.Value,
											}
										}) : null
									}
								}) : null
							}
						}) : null
					})
				}
				console.log('Store state: ', {
					id: sport.$.ID,
					name: sport.$.Name,
					events: events
				})
				return {
					id: sport.$.ID,
					name: sport.$.Name,
					events: events
				}
			});
    default:
      return state
  }
}

export default sports
