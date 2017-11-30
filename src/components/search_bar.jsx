import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getData } from '../actions';


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
    const {getData} = this.props;
    getData(this.state.term);
  }

  onEnterClick(event) {
    const {getData} = this.props;
    if (event.keyCode == 13) {
      getData(this.state.term);
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

function mapStateToProps(state) {
    const {data} = state;
    return {data}
}


export default connect(null, {getData})(SearchBar);
