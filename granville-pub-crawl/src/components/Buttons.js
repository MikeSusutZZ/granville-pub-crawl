// src/components/Buttons.js
import React from 'react';
import { Button } from 'react-bootstrap';

const Buttons = () => (
    <div className="button-container text-center my-3">
      <Button href="https://www.eventbrite.ca/e/vancouver-granville-pub-crawl-route-a-tickets-774644310987" target="_blank" className="glow-button mx-2">Route A Booking</Button>
      <Button href="https://www.eventbrite.ca/e/vancouver-granville-pub-crawl-route-b-tickets-884288068417" target="_blank" className="glow-button mx-2">Route B Booking</Button>
      <Button href="https://www.instagram.com/granvillepubcrawl/" target="_blank" className="glow-button mx-2">Instagram</Button>
      <Button href="https://vstudiovisual.pixieset.com/pubcrawl/" target="_blank" className="glow-button mx-2">Photo Gallery</Button>
    </div>
  );

export default Buttons;
