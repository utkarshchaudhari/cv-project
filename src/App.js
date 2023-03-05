import React, { Component } from 'react';
import Header from './components/Header';
import General from './components/CVForm/General';
import Experience from './components/CVForm/Experience';
import Education from './components/CVForm/Education';
import CVHeader from './components/CVPreview/CVHeader';
import Content from './components/CVPreview/Content';
import Sidebar from './components/CVPreview/Sidebar';
import Footer from './components/Footer';
import './style.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      title: '',
      address: '',
      phoneNumber: '',
      email: '',
      description: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <>
        <Header />
        <div className="container form_container">
          <General onChange={this.onChange} />
          <Experience />
          <Education />
        </div>
        <div className="container preview_container">
          <CVHeader
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            title={this.state.title}
          />
          <Content description={this.state.description} />
          <Sidebar
            address={this.state.address}
            phoneNumber={this.state.phoneNumber}
            email={this.state.email}
          />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
