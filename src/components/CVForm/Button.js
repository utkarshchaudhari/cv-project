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
      </div>
    );
  }
}

export default Button;
