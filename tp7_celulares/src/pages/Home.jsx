import { useState, useEffect } from 'react';
import { celulares } from '../data.js';



export default function Home() {
 
  const [randomPhones, setRandomPhones] = useState([]);

 

  useEffect(() => {
    const Celus = [...celulares].sort(() => 0.5 - Math.random());
    setRandomPhones(Celus.slice(0, 3));
  }, []);

  return (
    <div>
      <h1>Bienvenidos a Celulares</h1>
      <p>Encuentra los mejores celulares de las marcas más reconocidas.</p>
      <h2>Celulares destacados</h2>
      <div className="phone-grid">
        {randomPhones.map((phone) => (
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
