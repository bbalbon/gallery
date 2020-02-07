// file for assembling bottom panel with clickable thumbnails to render main display photo

import React from "react";
import Thumbnail from "./Thumbnail.jsx";

class BottomPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    let thumbnails = this.props.thumbnails;
    return (
      <div className="row">
        {thumbnails.map((thumbnail, i) => {
          this.state.counter++;
          return (
            <Thumbnail
              key={i}
              row={this.props.row}
              changeDisplay={this.props.changeDisplay}
              counter={this.state.counter}
              img={thumbnail}
            />
          );
        })}
      </div>
    );
  }
}

export default BottomPanel;
