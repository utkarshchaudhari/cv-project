import React, { Component } from 'react';
import ExperienceList from './ExperienceList';

class Experience extends Component {
  render() {
    return (
      <div className="content_section">
        <h3 className="content_Title">Experience</h3>
        <div className="details_wrapper">
          {this.props.experience.map((item) => (
            <ExperienceList key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Experience;
