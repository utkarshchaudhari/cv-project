import React, { Component } from 'react';

class Experience extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className="section__wrapper">
        <h3>Experience</h3>
        <div className="fields__wrapper">
          <input
            type="text"
            name="position"
            placeholder="Position"
            data-experience="0"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="company"
            placeholder="Company"
            data-experience="0"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="city"
            placeholder="City"
            data-experience="0"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="from"
            placeholder="From"
            data-experience="0"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="to"
            placeholder="To"
            data-experience="0"
            onChange={onChange}
          ></input>
          <button className="black">Delete</button>
          <button className="black">Add</button>
        </div>
      </div>
    );
  }
}

export default Experience;
