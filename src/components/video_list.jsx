import React, { Component } from 'react';
import VideoListItem from '../components/video_list_item';

class VideoList extends Component {

  render() {

    const { videos } = this.props;

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

export default VideoList;
