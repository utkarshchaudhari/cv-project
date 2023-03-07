import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
      experience: [{ id: 1 }],
      education: [{ id: 1 }],
    };

    this.onChange = this.onChange.bind(this);
    this.experienceChange = this.experienceChange.bind(this);
    this.educationChange = this.educationChange.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  experienceChange(e) {
    const newArr = this.state.experience.map((item) => {
      if (item.id == e.target.dataset.experience) {
        return (item = { ...item, [e.target.name]: e.target.value });
      } else return item;
    });
    this.setState({ experience: newArr });
  }

  educationChange(e) {
    const newArr = this.state.education.map((item) => {
      if (item.id == e.target.dataset.education) {
        return { ...item, [e.target.name]: e.target.value };
      } else return item;
    });
    this.setState({ education: newArr });
  }

  addExperience() {
    this.setState({ experience: [...this.state.experience, { id: uuidv4() }] });
  }

  deleteExperience(e) {
    const newArr = this.state.experience.filter(
      (item) => item.id != e.target.dataset.experience
    );
    this.setState({ experience: newArr });
  }

  addEducation() {
    this.setState({ education: [...this.state.education, { id: uuidv4() }] });
  }

  deleteEducation(e) {
    const newArr = this.state.education.filter(
      (item) => item.id != e.target.dataset.education
    );
    this.setState({ education: newArr });
  }
  render() {
    return (
      <>
        <Header />
        <div className="container form_container">
          <General onChange={this.onChange} />
          <Experience
            onChange={this.experienceChange}
            addExperience={this.addExperience}
            deleteExperience={this.deleteExperience}
            experiences={this.state.experience}
          />
          <Education
            onChange={this.educationChange}
            addEducation={this.addEducation}
            deleteEducation={this.deleteEducation}
            education={this.state.education}
          />
        </div>
        <div className="container preview_container">
          <CVHeader
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            title={this.state.title}
          />
          <Content
            description={this.state.description}
            experience={this.state.experience}
            education={this.state.education}
          />
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
