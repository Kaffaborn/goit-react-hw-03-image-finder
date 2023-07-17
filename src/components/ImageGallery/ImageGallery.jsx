import { Component } from 'react';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import PropTypes from 'prop-types';

import IGCss from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {};

  render() {
    return (
      <>
        <ul className={IGCss.ImageGallery}>
          {this.props.imageBase.map(
            ({ id, webformatURL, tags, largeImageURL }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  webformatURL={webformatURL}
                  tags={tags}
                  imageForModal={largeImageURL}
                  openModal={this.props.openModal}
                />
              );
            }
          )}
        </ul>

        {this.props.load && <Loader />}

        {this.props.imageBase.length > 0 &&
          this.props.imageBase.length < this.props.total && (
            <Button addMore={this.props.addMore} />
          )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  search: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
