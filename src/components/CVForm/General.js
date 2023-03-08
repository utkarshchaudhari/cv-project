import React, { Component } from 'react';

class General extends Component {
  render() {
    const { onChange, stateProp } = this.props;
    return (
      <div className="section__wrapper">
        <h3>Personal Information</h3>
        <div className="fields__wrapper">
          <input
            type="text"
            name="firstName"
            value={stateProp.firstName}
            placeholder="First name"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="lastName"
            value={stateProp.lastName}
            placeholder="Last name"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="title"
            value={stateProp.title}
            placeholder="Title"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="address"
            value={stateProp.address}
            placeholder="Address"
            onChange={onChange}
          ></input>
          <input
            type="text"
            name="phoneNumber"
            value={stateProp.phoneNumber}
            placeholder="Phone number"
            onChange={onChange}
          ></input>
          <input
            type="e-mail"
            name="email"
            value={stateProp.email}
            placeholder="E-mail"
            onChange={onChange}
          ></input>
          <textarea
            name="description"
            value={stateProp.description}
            placeholder="Description"
            onChange={onChange}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default General;
