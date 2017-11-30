import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getData, selectVideo } from '../actions';
import SearchBar from '../components/search_bar';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';


class App extends Component {

  componentDidMount() {
    const {getData} = this.props;
      getData('');
  }


  render() {
    console.log('data',this.props.data);

    return (
      <div>
        <SearchBar />
        <VideoDetail />
        <VideoList />
      </div>
    )
  }

}

function mapStateToProps(state) {
    const {data} = state;
    return {data}
}


export default connect(mapStateToProps, {getData})(App);
