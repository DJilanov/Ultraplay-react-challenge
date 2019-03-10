import React from 'react'
import FilterLink from '../containers/FilterLink'

import PropTypes from 'prop-types'

const sideMenuStyling = {
	float: 'left',
	width: '200px'
}
// TODO: Make it universal for all sports
const SideMenu = ({ sports }) => (
	sports ? <div style={sideMenuStyling}>
		{sports[0].events.map(event =>
			<FilterLink filter={event.name}>
				{event.name}
			</FilterLink>
		)}
	</div> : null
)

SideMenu.propTypes = {
	sports: PropTypes.object.isRequired
}

export default SideMenu
