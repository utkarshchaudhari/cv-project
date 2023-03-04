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
  render() {
    return (
      <>
        <Header />
        <div className="container form_container">
          <General />
          <Experience />
          <Education />
        </div>
        <div className="container preview_container">
          <CVHeader />
          <Content />
          <Sidebar />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
