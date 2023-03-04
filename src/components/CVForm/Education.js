import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div className="section__wrapper">
        <h3>Education</h3>
        <div className="fields__wrapper">
          <input type="text" placeholder="University name"></input>
          <input type="text" placeholder="City"></input>
          <input type="text" placeholder="Degree"></input>
          <input type="text" placeholder="Subject"></input>
          <input type="text" placeholder="From"></input>
          <input type="text" placeholder="To"></input>
          <button className="black">Delete</button>
          <button className="black">Add</button>
        </div>
      </div>
    );
  }
}

export default Education;
