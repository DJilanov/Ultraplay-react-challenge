import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchMatches } from '../actions'
import VisibleMatchesList from '../containers/VisibleMatchesList'
import SideMenuContainer from '../containers/SideMenuContainer';

class App extends React.Component {
	componentDidMount() {
		this.props.fetchMatches()
	}

	render() {
		return (
			<div>
				<SideMenuContainer />
				<VisibleMatchesList />
			</div>
		)
	}
}

App.propTypes = {
	fetchMatches: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
	fetchMatches: () => dispatch(fetchMatches()),
})

export default connect(null, mapDispatchToProps)(App);
