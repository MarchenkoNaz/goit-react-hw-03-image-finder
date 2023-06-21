import React from 'react'
import PropTypes from 'prop-types'

const Loader = props => {
	return (
		<div className="text-center">
			<div className="spinner-grow" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	)
}

Loader.propTypes = {}

export default Loader