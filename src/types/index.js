import PropTypes from 'prop-types'

export const match = PropTypes.shape({
	id: PropTypes.string.isRequired,
	name: PropTypes.bool.isRequired,
	startDate: PropTypes.bool.isRequired,
	matchType: PropTypes.string.isRequired
}).isRequired

export const event = PropTypes.shape({
	categoryId: PropTypes.string.isRequired,
	id: PropTypes.bool.isRequired,
	isLive: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	matches: PropTypes.arrayOf(match).isRequired
}).isRequired