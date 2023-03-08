import React, { Component } from 'react';

class EducationItem extends Component {
  render() {
    const { onChange, item, deleteEducation } = this.props;
    return (
      <>
        <input
          type="text"
          name="universityName"
          value={item.universityName}
          placeholder="University name"
          data-education={item.id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="city"
          value={item.city}
          placeholder="City"
          data-education={item.id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="degree"
          value={item.degree}
          placeholder="Degree"
          data-education={item.id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="subject"
          value={item.subject}
          placeholder="Subject"
          data-education={item.id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="from"
          value={item.from}
          placeholder="From"
          data-education={item.id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="to"
          value={item.to}
          placeholder="To"
          data-education={item.id}
          onChange={onChange}
        ></input>
        <button
          className="black"
          data-education={item.id}
          onClick={deleteEducation}
        >
          Delete
        </button>
      </>
    );
  }
}

export default EducationItem;
