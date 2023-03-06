import React, { Component } from 'react';

class Experience extends Component {
  render() {
    const { experience } = this.props;
    return (
      <div className="content_section">
        <h3 className="content_Title">Experience</h3>
        <div className="information_wrapper">
          <div className="dates">
            <h4>
              {experience[0].from} - {experience[0].to}
            </h4>
          </div>
          <div className="information">
            <h4>{experience[0].position}</h4>
            <p className="details">
              {experience[0].company}, {experience[0].city}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
