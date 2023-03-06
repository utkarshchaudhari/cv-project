import React, { Component } from 'react';
import Description from './Description';
import Education from './Education';
import Experience from './Experience';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Description description={this.props.description} />
        <Experience experience={this.props.experience} />
        <Education education={this.props.education} />
      </div>
    );
  }
}

export default Content;
