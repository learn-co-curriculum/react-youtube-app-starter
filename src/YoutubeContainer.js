import React, { Component } from "react";

import VideoList from "./VideoList";
import VideoTile from "./VideoTile";
import SearchBar from "./SearchBar";
import _ from "lodash";

import keys from "./keys";

export default class YouTubeContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "Britney Spears",
      videos: [],
      selectedVideo: null,
      loading: true
    };
  }

  componentDidMount() {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${
      keys.API_KEY
    }&q=${this.state.searchTerm}&type=video`;

    fetch(url)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          videos: data.items,
          selectedVideo: data.items[0],
          loading: false
        })
      );
  }

  changeSelectedVideo = video => {
    this.setState({
      selectedVideo: video
    });
  };

  changeSearch = newSearchTerm => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${
      keys.API_KEY
    }&q=${newSearchTerm}&type=video`;

    fetch(url)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          videos: data.items,
          selectedVideo: data.items[0],
          loading: false
        })
      );
  };

  render() {
    const videoSearch = _.debounce(term => {
      this.changeSearch(term);
    }, 2000);

    return (
      <div>
        {this.state.loading ? (
          <div>Loading... </div>
        ) : (
          <div>
            <SearchBar changeSearch={videoSearch} />
            <VideoTile
              videos={this.state.videos}
              selectedVideo={this.state.selectedVideo}
            />
            <VideoList
              videos={this.state.videos}
              selectedVideo={this.state.selectedVideo}
              changeSelectedVideo={this.changeSelectedVideo}
            />
          </div>
        )}
      </div>
    );
  }
}
