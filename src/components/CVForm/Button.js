import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';

class Button extends Component {
  render() {
    return (
      <div className="section__wrapper">
        <ReactToPrint
          trigger={() => <button className="green">Generate PDF</button>}
          documentTitle="Resume"
          content={() =>
            document.getElementsByClassName('preview_container')[0]
          }
        />
        <button className="orange" onClick={this.props.exampleCV}>
          Load Example
        </button>
        <button className="red" onClick={this.props.resetCV}>
          Reset
        </button>
      </div>
    );
  }
}

export default Button;
