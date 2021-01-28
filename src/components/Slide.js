import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: '/portfolio/foto1.png',
      thumbnail: '/portfolio/foto1.png',
    },
    {
      original: '/portfolio/foto2.png',
      thumbnail: '/portfolio/foto2.png',
    },
    {
      original: '/portfolio/foto3.png',
      thumbnail: '/portfolio/foto3.png/',
    },
  ];

  function Slide(){
      return(
        <ImageGallery items={images} />
      )
  }

export default Slide;