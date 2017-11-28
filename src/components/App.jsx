import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions';


class App extends Component {

  componentDidMount() {
    const {getData} = this.props;
      getData('snowboard');
  }

  render() {
    console.log('data',this.props.data);

    return (
      <div>youtube</div>
    )
  }

}

function mapStateToProps(state) {
    const {data} = state;
    return {data}
}


export default connect(mapStateToProps, {getData})(App);
