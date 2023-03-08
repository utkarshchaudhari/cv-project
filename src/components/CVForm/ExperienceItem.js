import React, { Component } from 'react';

class ExperienceItem extends Component {
  render() {
    const { item, onChange, deleteExperience } = this.props;
    return (
      <>
        <input
          type="text"
          name="position"
          value={item.position}
          placeholder="Position"
          data-experience={item.id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="company"
          value={item.company}
          placeholder="Company"
          data-experience={item.id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="city"
          value={item.city}
          placeholder="City"
          data-experience={item.id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="from"
          value={item.from}
          placeholder="From"
          data-experience={item.id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="to"
          value={item.to}
          placeholder="To"
          data-experience={item.id}
          onChange={onChange}
        ></input>
        <button
          className="black"
          data-experience={item.id}
          onClick={deleteExperience}
        >
          Delete
        </button>
      </>
    );
  }
}

export default ExperienceItem;
