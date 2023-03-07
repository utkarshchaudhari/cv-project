import React, { Component } from 'react';

class EducationItem extends Component {
  render() {
    const { onChange, id } = this.props;
    return (
      <>
        <input
          type="text"
          name="universityName"
          placeholder="University name"
          data-education={id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="city"
          placeholder="City"
          data-education={id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          data-education={id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          data-education={id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="from"
          placeholder="From"
          data-education={id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="to"
          placeholder="To"
          data-education={id}
          onChange={onChange}
        ></input>
        <button className="black">Delete</button>
      </>
    );
  }
}

export default EducationItem;
