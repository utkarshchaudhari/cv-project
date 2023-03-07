import React, { Component } from 'react';

class ExperienceList extends Component {
  render() {
    const { item } = this.props;
    return (
      <>
        <div className="information_wrapper">
          <div className="dates">
            <h4>
              {item.from} - {item.to}
            </h4>
          </div>
          <div className="information">
            <h4>{item.position}</h4>
            <p className="details">
              {item.company}, {item.city}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default ExperienceList;
