import React, { Component } from 'react';
import {connect} from 'react-redux';
import { selectVideo } from '../actions';

class VideoListItem extends Component {

  onVideoSelect(selectedVideo) {
    const {selectVideo} = this.props;
      selectVideo(selectedVideo);
  }

  render() {

    const { video } = this.props;
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;


    return (
      <li onClick={() => this.onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{title}</div>
          </div>
        </div>
      </li>
    )
  }

}

export default connect( null, {selectVideo})(VideoListItem);
