import PropTypes from 'prop-types';

const ImageGalleryItem = ({
	webformatURL,
	tags = '',
	largeImageURL,
	openFullScreenMode,
}) => {
	return (
		<li className="thumbnail col" onClick={() => openFullScreenMode(largeImageURL, tags)}>
			<img className='img-thumbnail' src={webformatURL} alt={tags} />
		</li>
	);
};

ImageGalleryItem.propTypes = {
	webformatURL: PropTypes.string.isRequired,
	tags: PropTypes.string,
	largeImageURL: PropTypes.string.isRequired,
	openFullScreenMode: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
