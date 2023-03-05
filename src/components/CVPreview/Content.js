import React, { Component } from 'react';
import Description from './Description';
import Education from './Education';
import Experience from './Experience';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Description description={this.props.description} />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default Content;
