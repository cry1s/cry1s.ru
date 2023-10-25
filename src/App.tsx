import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import CV from './components/CV';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <CV></CV>
      <Projects />
      <Footer />
    </div>
  );
};

export default App;