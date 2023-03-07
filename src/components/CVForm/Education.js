import React, { Component } from 'react';
import EducationItem from './EducationItem';

class Education extends Component {
  render() {
    const { onChange, addEducation, education } = this.props;
    const educationItems = education.map((item) => (
      <EducationItem key={item.id} id={item.id} onChange={onChange} />
    ));
    return (
      <div className="section__wrapper">
        <h3>Education</h3>
        <div className="fields__wrapper">
          {educationItems}
          <button className="black" onClick={addEducation}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Education;
