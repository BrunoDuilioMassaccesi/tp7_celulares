
import { useState, useEffect } from 'react';
import { celulares } from '../data.js';

export default function Home() {
  const [celusRandoms, setCelusRandoms] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselImages = celulares.filter(cel => cel.id >= 1 && cel.id <= 4);

  useEffect(() => {
    const Celus = [...celulares].sort(() => 0.5 - Math.random());
    setCelusRandoms(Celus.slice(0, 3));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToPrevious = () => {
    setCarouselIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCarouselIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <h1>Bienvenidos a Celulares</h1>
      <div className="carousel-container" style={{ position: 'relative', width: '100%', maxWidth: '400px', margin: 'auto' }}>
        {carouselImages.length > 0 && (
          <div>
            <img
              src={carouselImages[carouselIndex].fotos[0]}
              alt={carouselImages[carouselIndex].nombre}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
            <button
              onClick={goToPrevious}
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                cursor: 'pointer',
              }}
              aria-label="Previous Image"
            >
              &#8249;
            </button>
            <button
              onClick={goToNext}
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                cursor: 'pointer',
              }}
              aria-label="Next Image"
            >
              &#8250;
            </button>
          </div>
        )}
      </div>
      <p>Encuentra los mejores celulares de las marcas más reconocidas.</p>
      <h2>Celulares destacados</h2>
      <div className="phone-grid">
        {celusRandoms.map((phone) => (
          <div key={phone.id} className="phone-card">
            <h3>{phone.nombre}</h3>
            <img src={phone.fotos[0]} alt={phone.nombre} />
            <p>{phone.descripcion}</p>
            <p><strong>Precio:</strong> ${phone.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
