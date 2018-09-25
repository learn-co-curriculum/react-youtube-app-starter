import React, { Component } from "react";
import Thumbnail from "./Thumbnail";

const VideoList = ({ videos, selectedVideo, changeSelectedVideo }) => {
  //take out selected video from the videos array
  const filteredVideos = videos.filter(video => video !== selectedVideo);
  //map through each of the videos and display in thumbnail
  const videoItems = filteredVideos.map(video => (
    <Thumbnail
      key={video.etag}
      video={video}
      changeVideoFunction={changeSelectedVideo}
    />
  ));
  console.log(videoItems);
  return (
    <div>
      <div className="four wide column">
        <div className="ui relaxed items">{videoItems}</div>
      </div>
    </div>
  );
};

// class VideoList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//
//   render() {
//     const
//     return (
//       <div>
//         <Thumbnail />
//       </div>
//     );
//   }
// }

export default VideoList;
