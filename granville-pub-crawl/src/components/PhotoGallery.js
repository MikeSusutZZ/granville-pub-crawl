// src/components/PhotoGallery.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const images = [
  '/media/gallery/DSC00269_fullres.jpg',
  '/media/gallery/DSC00365_fullres.jpg',
  '/media/gallery/DSC00385_fullres.jpg',
  '/media/gallery/DSC00698_fullres.jpg',
  '/media/gallery/DSC03664-Enhanced-NR.jpg',
  '/media/gallery/DSC04148.jpg'
];

const PhotoGallery = () => (
  <Container className="my-3">
    <Row>
      {images.map((image, index) => (
        <Col key={index} xs={6} md={4} lg={2} className="mb-3">
          <a href={image} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={`photo-${index}`} className="img-fluid" />
          </a>
        </Col>
      ))}
    </Row>
  </Container>
);

export default PhotoGallery;
