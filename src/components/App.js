import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchSports } from '../actions'
import VisibleMatchesList from '../containers/VisibleMatchesList'
import SideMenuContainer from '../containers/SideMenuContainer';

class App extends React.Component {
	componentDidMount() {
		this.props.fetchSports()
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
	fetchSports: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
	fetchSports: () => dispatch(fetchSports()),
})

export default connect(null, mapDispatchToProps)(App);
