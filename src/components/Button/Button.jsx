import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick }) => {
	return (
		<button type="button" className="btn btn-info container-xl" onClick={onClick}>Load More</button>
	)
}

Button.propTypes = {}

export default Button