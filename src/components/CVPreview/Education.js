import React, { Component } from 'react';

class Education extends Component {
  render() {
    const { education } = this.props;
    return (
      <div className="content_section">
        <h3 className="content_Title">Education</h3>
        <div className="information_wrapper">
          <div className="dates">
            <h4>
              {education[0].from} - {education[0].to}
            </h4>
          </div>
          <div className="information">
            <h4>
              {education[0].universityName}, {education[0].city}
            </h4>
            <p className="details">Degree: {education[0].degree}</p>
            <p className="details">Subject: {education[0].subject}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
