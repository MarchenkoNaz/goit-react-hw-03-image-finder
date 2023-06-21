import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick }) => {
	return (
		<div className="text-center">
			<button type="button" className="btn btn-info container-xl" onClick={onClick}>Load More</button>
		</div>)
}

Button.propTypes = {
	onClick: PropTypes.func
}

export default Button