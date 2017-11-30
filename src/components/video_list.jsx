import React, { Component } from 'react';
import {connect} from 'react-redux';
import VideoListItem from '../components/video_list_item';

class VideoList extends Component {

  render() {

    const { videos } = this.props.data;

    return (
      <ul className="col-md-4 list-group">
        {videos.map((video) => {
          return (
            <VideoListItem
              video={video}
              key={video.etag}
              onVideoSelect = {this.props.onVideoSelect}
            />
          )
        })}
      </ul>
    )
  }

}

function mapStateToProps(state) {
    const {data} = state;
    return {data}
}


export default connect(mapStateToProps, null )(VideoList);
