import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h3 className="content_Title">Personal Details</h3>
        <h4>Address</h4>
        <h4>Phone Number</h4>
        <h4>Email</h4>
      </div>
    );
  }
}

export default Sidebar;
