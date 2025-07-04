import React from 'react';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import Education from './components/Education';
import Experience from './components/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navigation />
      <Overview />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
