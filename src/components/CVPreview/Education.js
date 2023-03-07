import React, { Component } from 'react';
import EducationList from './EducationList';

class Education extends Component {
  render() {
    const { education } = this.props;
    return (
      <div className="content_section">
        <h3 className="content_Title">Education</h3>
        <div className="details_wrapper">
          {education.map((item) => (
            <EducationList key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Education;
