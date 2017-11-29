import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      term: ''
    }
  }

  onInputChange(term) {
    this.setState({ term });
  }

  onSearchClick() {
    this.props.onSearchClick(this.state.term);
  }

  onEnterClick(event) {
    if (event.keyCode == 13) {
      this.props.onSearchClick(this.state.term);
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
          onKeyDown={(event) => this.onEnterClick(event)}
        />
        <button
          type="button"
          className="btn btn-sm btn-danger"
          onClick={() => this.onSearchClick()}
        >
          <span className="glyphicon glyphicon-search"></span>
          Search
        </button>
      </div>
    )
  }

}


export default SearchBar;
