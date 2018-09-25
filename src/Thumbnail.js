import React, { Component } from "react";

class Thumbnail extends Component {
  render() {
    console.log(this.props);
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    return (
      <div
        className="item"
        onClick={e => this.props.changeVideoFunction(this.props.video)}
      >
        <div className="ui small image">
          <img src={imageUrl} alt={this.props.video.snippet.title} />
        </div>
        <div className="content">{this.props.video.snippet.title}</div>
      </div>
    );
  }
}

export default Thumbnail;
