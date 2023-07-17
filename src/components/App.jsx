import { Component } from 'react';

import { getImage } from '../api/getImage';
import { Searchbar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    search: '',
    page: 1,

    imageBase: [],
    total: 0,
    new: true,
    load: false,
    error: false,

    modal: false,
    imageModal: '',
    tagModal: '',
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.setState({ load: true });

      getImage({ query: this.state.search, page: this.state.page })
        .then(response => {
          if (response.total === 0) {
            alert(
              `Нажаль за запитом "${this.state.search}" нічого не знайдено`
            );
          }

          if (prevState.search !== this.state.search) {
            return this.setState({
              total: response.total,
              imageBase: response.hits,
              new: true,
            });
          }

          if (prevState.page !== this.state.page && !this.state.new) {
            return this.setState({
              imageBase: [...prevState.imageBase, ...response.hits],
            });
          }
        })
        .catch(() => this.setState({ error: true }))
        .finally(() => {
          return setTimeout(() => {
            this.setState({ load: false });
          }, 250);
        });
    }
  };

  openModal = (imageModal, tagModal) => {
    this.setState({ modal: true, imageModal, tagModal });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  searchQuery = value => {
    this.setState({
      search: value,
      page: 1,
    });
  };

  addMore = () => {
    this.setState(prev => {
      return {
        page: prev.page + 1,
        new: false,
      };
    });
  };

  render() {
    return (
      <>
        {this.state.modal && (
          <Modal
            imageModal={this.state.imageModal}
            tagModal={this.state.tagModal}
            closeModal={this.closeModal}
          />
        )}

        <Searchbar search={this.searchQuery} />
        <ImageGallery
          addMore={this.addMore}
          openModal={this.openModal}
          imageBase={this.state.imageBase}
          total={this.state.total}
          load={this.state.load}
        />
        {this.state.search === '' && (
          <h2 style={{ alignItems: 'center', textAlign: 'center' }}>
            Введіть будь ласка запит
          </h2>
        )}
      </>
    );
  }
}
