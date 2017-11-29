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

  onVideoSelect = (selectedVideo) => {
    const {selectVideo} = this.props;
      selectVideo(selectedVideo);
  }

  onVideoSearch = (term) => {
    const {getData} = this.props;
      getData(term);
  }


  render() {
    console.log('data',this.props.data);

    return (
      <div>
        <SearchBar onSearchClick={this.onVideoSearch} />
        <VideoDetail video={this.props.data.actualVideo}/>
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.props.data.videos}
        />
      </div>
    )
  }

}

function mapStateToProps(state) {
    const {data} = state;
    return {data}
}


export default connect(mapStateToProps, {getData, selectVideo })(App);
