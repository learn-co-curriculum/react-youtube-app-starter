import React, { Component } from "react";

class VideoTile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const embedUrl = `https://www.youtube.com/embed/${
      this.props.selectedVideo.id.videoId
    }`;
    return (
      <div className="eight wide column">
        <div className="ui raised segments">
          <div className="ui segment">
            <div className="ui embed">
              <iframe src={embedUrl} frameBorder="0" />
            </div>
          </div>
          <div className="ui segment">
            <h4>{this.props.selectedVideo.snippet.title}</h4>
          </div>
          <div className="ui secondary segment">
            <p>{this.props.selectedVideo.snippet.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoTile;
