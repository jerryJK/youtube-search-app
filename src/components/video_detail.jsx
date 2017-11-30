import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getData } from '../actions';


class VideoDetail extends Component {


  render() {

    const video = this.props.data.actualVideo;

    if(!video) {
      return <div>Loading..</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    )
  }

}


function mapStateToProps(state) {
    const {data} = state;
    return {data}
}


export default connect(mapStateToProps, {getData})(VideoDetail);
