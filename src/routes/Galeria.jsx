// src/pages/GaleriaSlideshow.jsx
import React, { useState } from 'react';
import '../scss/Galeria.css';

// Exemplo de dados para a galeria
const images = [
  { id: 1, src: '/assets/link_para_imagem1.jpg', title: 'Título 1' },
  { id: 2, src: '/assets/link_para_imagem2.jpg', title: 'Título 2' },
  { id: 3, src: '/assets/link_para_imagem3.jpg', title: 'Título 3' },
   { id: 4, src: '/assets/link_para_imagem1.jpg', title: 'Título 3' },
    { id: 5, src: '/assets/link_para_imagem2.jpg', title: 'Título 3' },
     { id: 6, src: '/assets/link_para_imagem3.jpg', title: 'Título 3' },
  // Adicione mais imagens conforme necessário
];

export default function Galeria() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="slideshow-image"
        />
        <button onClick={handlePrev} className="nav-button prev">◄</button>
        <button onClick={handleNext} className="nav-button next">►</button>
      </div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.title}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
