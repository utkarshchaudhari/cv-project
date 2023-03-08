import { v4 as uuidv4 } from 'uuid';
const example = {
  firstName: 'Utkarsh',
  lastName: 'Chaudhari',
  title: 'Web Developer',
  address: '100 Example St',
  phoneNumber: '1234567890',
  email: 'utkarsh1@gmail.com',
  description:
    'As an experienced web developer, I possess a strong background in web development technologies such as HTML, CSS, JavaScript, and React. I have extensive experience in building responsive websites, optimizing website performance, integrating third-party APIs, and implementing security measures.',
  experience: [
    {
      id: uuidv4(),
      position: 'Junior Web Developer',
      company: 'Apple',
      city: 'Toronto',
      from: '2019',
      to: '2021',
    },
    {
      id: uuidv4(),
      position: 'Web Developer',
      company: 'Amazon',
      city: 'Vancouver',
      from: '2022',
      to: 'Present',
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: 'McMaster University',
      city: 'Burlington',
      degree: 'Bachelor',
      subject: 'Computer Science',
      from: '2021',
      to: 'Present',
    },
    {
      id: uuidv4(),
      universityName: 'Sheridan College',
      city: 'Brampton',
      degree: 'Diploma',
      subject: 'Systems Analyst',
      from: '2017',
      to: '2020',
    },
  ],
};

export default example;
