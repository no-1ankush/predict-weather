import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm : ''};

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({ searchTerm: e.target.value });
  };

  handleFormSubmit(e) {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} >
          <input
            placeholder = "Search By City or Zip Code"
            onChange={this.handleSearch}
          />
          <button type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
