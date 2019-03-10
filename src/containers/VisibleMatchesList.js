import { connect } from 'react-redux'
import { VisibilityFilters } from '../actions'
import MatchesList from '../components/MatchesList'

const getVisibleMatches = (sports, filter) => {
	if(!sports) {
		return null
	}
	// TODO: Add logic for others than eSports
  switch (filter) {
		case '':
      return sports[0].events[0]
    default:
      return sports[0].events.filter(event => event.name === filter)[0]
  }
}

const mapStateToProps = state => ({
  event: getVisibleMatches(state.sports, state.visibilityFilter)
})

export default connect(
  mapStateToProps
)(MatchesList)
