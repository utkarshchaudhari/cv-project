import React, { Component } from 'react';

class Description extends Component {
  render() {
    return (
      <div className="content_section">
        <h3 className="content_Title">Description</h3>
        <p className="summary">{this.props.description}</p>
      </div>
    );
  }
}

export default Description;
