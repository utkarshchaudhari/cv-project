import React, { Component } from 'react';

class General extends Component {
  render() {
    return (
      <div className="section__wrapper">
        <h3>Personal Information</h3>
        <div className="fields__wrapper">
          <input type="text" placeholder="First name"></input>
          <input type="text" placeholder="Last name"></input>
          <input type="text" placeholder="Title"></input>
          <input type="text" placeholder="Address"></input>
          <input type="text" placeholder="Phone number"></input>
          <input type="e-mail" placeholder="E-mail"></input>
          <textarea placeholder="Description"></textarea>
        </div>
      </div>
    );
  }
}

export default General;
