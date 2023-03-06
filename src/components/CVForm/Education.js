import React, { Component } from 'react';

class Education extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className="section__wrapper">
        <h3>Education</h3>
        <div className="fields__wrapper">
          <input
            type="text"
            name="universityName"
            placeholder="University name"
            data-education="0"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="city"
            placeholder="City"
            data-education="0"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            data-education="0"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            data-education="0"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="from"
            placeholder="From"
            data-education="0"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="to"
            placeholder="To"
            data-education="0"
            onChange={onChange}
          ></input>
          <button className="black">Delete</button>
          <button className="black">Add</button>
        </div>
      </div>
    );
  }
}

export default Education;
