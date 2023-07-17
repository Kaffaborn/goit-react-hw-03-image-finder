import IGICss from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export function ImageGalleryItem({
  webformatURL,
  tags,
  imageForModal,
  openModal,
}) {
  return (
    <li className={IGICss.imageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={IGICss.imageGalleryItemImage}
        onClick={() => {
          openModal(imageForModal, tags);
        }}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  imageForModal: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
