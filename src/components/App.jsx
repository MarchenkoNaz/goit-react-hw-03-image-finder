import React, { Component } from 'react'

import { fetchData } from 'Helpers/Helpers'
import ImageGallery from './ImageGallery/ImageGallery'
import SearchBar from './SearchBar/SearchBar'
import Button from './Button/Button'
import Modal from './Modal/Modal'

export class App extends Component {
	state = {
		images: [],
		currentPage: 1,
		searchTerm: '',
		error: '',
		isFetching: false,
		modal: { isOpen: false, src: '', alt: '' },

	}
	componentDidUpdate(prevProps, prevState) {
		if (
			prevState.currentPage !== this.state.currentPage ||
			prevState.searchValue !== this.state.searchValue
		) {
			this.requestData(this.state.searchValue, this.state.currentPage);
		}
	}

	requestData = async (searchValue, currentPage) => {
		try {
			this.setState({ isLoading: true })

			const { hits } = await fetchData(searchValue, currentPage);

			if (currentPage === 1) {
				this.setState(() => ({ images: hits }));
			} else {
				this.setState(prevState => ({
					images: [...prevState.images, ...hits],
				}));
			}
		}
		catch (error) {
			this.setState(() => ({ error: error.message }));
		} finally {
			this.setState(() => ({ isLoading: false }));
		}

	}

	onSubmit = searchValue => {
		this.setState(() => ({ searchValue, currentPage: 1 }));
	};

	handleLoadMore = () => {
		this.setState(s => ({ currentPage: s.currentPage + 1 }));
	};

	handleOpenModal = (src, alt) => {
		this.setState(() => ({ modal: { isOpen: true, src, alt } }));
	};

	handleCloseModal = () => {
		this.setState(() => ({ modal: { isOpen: false, src: '', alt: '' } }));
	};

	render() {
		const {
			images,
			error,
			isLoading,
			modal: { isOpen, src, alt },
		} = this.state;
		const showLoadMoreBtn = images.length > 0 && !isLoading;

		return (
			<>
				<SearchBar onSubmit={this.onSubmit} />
				<ImageGallery images={images} error={error} isLoading={isLoading} openFullScreenMode={this.handleOpenModal} />

				{showLoadMoreBtn && <Button onClick={this.handleLoadMore} />}
				{isOpen && (
					<Modal closeModal={this.handleCloseModal}>
						<img src={src} alt={alt} />
					</Modal>
				)}
			</>

		)
	}
}
