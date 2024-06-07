// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Video from './components/Video';
import Buttons from './components/Buttons';
import PhotoGallery from './components/PhotoGallery';
import './App.css';

const App = () => (
  <div style={{ 
    position: 'relative',
    minHeight: '100vh',
    color: 'white'
  }}>
    {/* Dark overlay */}
    <div style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: "url('/media/lasers.jpg')", 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      filter: 'brightness(30%)', // Darken the background image
      zIndex: -1
    }} />
    
    <Header />
    <Video />
    <Buttons />
    <PhotoGallery />
  </div>
);

export default App;
