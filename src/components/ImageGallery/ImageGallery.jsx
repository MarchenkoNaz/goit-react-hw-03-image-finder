import React from 'react'
import PropTypes from 'prop-types'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import Loader from 'components/Loader/Loader';

const ImageGallery = ({ images = [], error, isLoading, openFullScreenMode }) => {
	const showLoader = isLoading && images?.length !== 0;
	return (<>

		<ul className="container-fluid  row row-cols-3">
			{images.map(img => {
				return (
					<ImageGalleryItem key={img.id} {...img} openFullScreenMode={openFullScreenMode} />
				)
			})}
		</ul>
		{!!error && <p>{error.message}</p>}
		{showLoader && <Loader />}
	</>)
}


ImageGallery.propTypes = {
	images: PropTypes.array,
	error: PropTypes.string,
	isLoading: PropTypes.bool,
	openFullScreenMode: PropTypes.func,
};

export default ImageGallery