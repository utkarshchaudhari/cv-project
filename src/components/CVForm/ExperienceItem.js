import React, { Component } from 'react';

class ExperienceItem extends Component {
  render() {
    const { id, onChange } = this.props;
    return (
      <>
        <input
          type="text"
          name="position"
          placeholder="Position"
          data-experience={id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="company"
          placeholder="Company"
          data-experience={id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="city"
          placeholder="City"
          data-experience={id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="from"
          placeholder="From"
          data-experience={id}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="to"
          placeholder="To"
          data-experience={id}
          onChange={onChange}
        ></input>
        <button className="black">Delete</button>
      </>
    );
  }
}

export default ExperienceItem;
