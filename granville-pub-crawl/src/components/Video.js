// src/components/Video.js
import React from 'react';

const Video = () => (
  <div className="video-wrapper">
    <div className="video-container">
      <iframe
        className="responsive-video"
        src="https://www.youtube.com/embed/SAYE3CR23XI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

export default Video;
