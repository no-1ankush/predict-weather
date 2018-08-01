import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm : ''};

    this.handleSearch = this.handleSearch.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleSearch(e) {
    this.setState({ searchTerm: e.target.value });
  };

  handleFormSubmit(e) {
    e.preventDefault();

    this.props.fetchWeather(this.state.searchTerm);
    this.setState({ searchTerm: '' })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} >
          <input
            value={this.state.searchTerm}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
