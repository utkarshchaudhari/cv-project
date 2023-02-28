import React, { Component } from 'react';
import Header from './components/Header';
import General from './components/General';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import './style.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <General />
          <Experience />
          <Education />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
