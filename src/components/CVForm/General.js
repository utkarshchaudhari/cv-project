import React, { Component } from 'react';

class General extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className="section__wrapper">
        <h3>Personal Information</h3>
        <div className="fields__wrapper">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            onChange={onChange}
          ></input>
          <input
            type="e-mail"
            name="email"
            placeholder="E-mail"
            onChange={onChange}
          ></input>
          <textarea
            name="description"
            placeholder="Description"
            onChange={onChange}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default General;
