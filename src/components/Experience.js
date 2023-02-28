import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div className="section__wrapper">
        <h3>Experience</h3>
        <div className="fields__wrapper">
          <input type="text" placeholder="Position"></input>
          <input type="text" placeholder="Company"></input>
          <input type="text" placeholder="City"></input>
          <input type="text" placeholder="From"></input>
          <input type="text" placeholder="To"></input>
          <button className="black">Delete</button>
          <button className="black">Add</button>
        </div>
      </div>
    );
  }
}

export default Experience;
