import { Component } from 'react';

import SearchCSS from './SearchBar.module.css';

export class Searchbar extends Component {
  state = {
    inputValue: '',
    prevInputValue: 'запит',
  };

  inputChange = ({ target: { value } }) => {
    this.setState({ inputValue: value.toLowerCase() });
  };

  searchSubmit = e => {
    e.preventDefault();
    const value = this.state.inputValue.trim();
    if (!value) {
      alert('Ввадіть запит');
      return;
    }

    if (this.state.prevInputValue === this.state.inputValue) {
      alert(`Ви ввели запит "${this.state.prevInputValue}" повторно`);
      return;
    }

    this.setState({ prevInputValue: value });
    this.props.search(this.state.inputValue);
  };

  render() {
    return (
      <header className={SearchCSS.Searchbar}>
        <form className={SearchCSS.SearchForm} onSubmit={this.searchSubmit}>
          <button type="submit" className={SearchCSS.SearchFormButton}>
            <span className={SearchCSS.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={SearchCSS.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.inputChange}
            value={this.state.inputValue}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
