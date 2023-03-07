import React, { Component } from 'react';

class EducationList extends Component {
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
            <h4>
              {item.universityName}, {item.city}
            </h4>
            <p className="details">Degree: {item.degree}</p>
            <p className="details">Subject: {item.subject}</p>
          </div>
        </div>
      </>
    );
  }
}

export default EducationList;
