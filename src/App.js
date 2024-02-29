import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Body from './components/Body';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Experience from './components/Experience';
function App() {
  return (
    <div>
      <div className='container'>
        <Header />
        <Skills />
        <Profile />
        <Experience />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App
