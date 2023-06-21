import { fetchData } from 'Helpers/Helpers';
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class SearchBar extends Component {
	state = {
		searchValue: ''
	}
	handleSubmit = e => {
		e.preventDefault();

		this.props.onSubmit(this.state.searchValue);
		this.setState(() => ({ searchValue: '' }));
	};
	handleSearchTerm = ({ target: { value, name } }) => {
		this.setState(() => ({ [name]: value }));
	};
	render() {
		return (
			<header className="navbar navbar-expand-lg  bg-light justify-content-center">
				<form className="d-flex my-2 my-lg-0 " onSubmit={(e) => this.handleSubmit(e)}>
					<input
						name='searchValue'
						className="form-control mr-sm-3 m-2"
						type="text"
						autoComplete="off"
						autoFocus
						placeholder="Search images and photos"
						value={this.state.searchValue}
						onChange={this.handleSearchTerm}
					/>
					<button type="submit" className="btn btn-outline-success my-2  m-2">
						<span className="button-label">Search</span>
					</button>
				</form>
			</header>
		)
	}
}
