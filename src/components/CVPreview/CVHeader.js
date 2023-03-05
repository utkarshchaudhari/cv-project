import React, { Component } from 'react';

class CVHeader extends Component {
  render() {
    const { firstName, lastName, title } = this.props;
    return (
      <header className="cvHeader">
        <h1 className="cvName">
          {firstName} {lastName}
        </h1>
        <p className="cvTitle">{title}</p>
      </header>
    );
  }
}

export default CVHeader;
