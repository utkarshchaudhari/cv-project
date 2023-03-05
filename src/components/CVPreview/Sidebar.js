import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    const { address, phoneNumber, email } = this.props;
    return (
      <div className="sidebar">
        <h3 className="content_Title">Personal Details</h3>
        <div className="details_wrapper">
          <div className="address">
            <h4>Address</h4>
            <p className="sidebar_details">{address}</p>
          </div>
          <div className="phoneNumber">
            <h4>Phone Number</h4>
            <p className="sidebar_details">{phoneNumber}</p>
          </div>
          <div className="email">
            <h4>Email</h4>
            <p className="sidebar_details">{email}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
