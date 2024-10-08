import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem';

class Experience extends Component {
  render() {
    const { onChange, addExperience, deleteExperience, experiences } =
      this.props;
    const experienceItems = experiences.map((item) => (
      <ExperienceItem
        key={item.id}
        item={item}
        onChange={onChange}
        deleteExperience={deleteExperience}
      />
    ));
    return (
      <div className="section__wrapper">
        <h3>Experience</h3>
        <div className="fields__wrapper">
          {experienceItems}
          <button className="black" onClick={addExperience}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Experience;
