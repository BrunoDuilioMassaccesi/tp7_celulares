
import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../data.js';

export default function Productos() {
  const { idMarca } = useParams();
  let marcaIdNum = null;
  if (idMarca) {
    marcaIdNum = parseInt(idMarca);
  } else {
    marcaIdNum = null;
  }

  let filteredPhones = [];
  if (marcaIdNum) {
    filteredPhones = celulares.filter(function(cel) {
      return cel.marcaId === marcaIdNum;
    });
  } else {
    filteredPhones = celulares;
  }

  let marcaNombre = null;
  if (marcaIdNum) {
    const marcaEncontrada = marcas.find(function(m) {
      return m.id === marcaIdNum;
    });
    if (marcaEncontrada) {
      marcaNombre = marcaEncontrada.nombre;
    } else {
      marcaNombre = null;
    }
  } else {
    marcaNombre = null;
  }

  let titulo = 'Productos';
  if (marcaNombre) {
    titulo = 'Productos - ' + marcaNombre;
  }

  let contenido = null;
  if (filteredPhones.length === 0) {
    contenido = <p>No hay celulares para mostrar.</p>;
  } else {
    contenido = (
      <div className="phone-grid">
        {filteredPhones.map(function(phone) {
          return (
            <div key={phone.id} className="phone-card">
              <h3>{phone.nombre}</h3>
              <img src={phone.fotos[0]} alt={phone.nombre} />
              <p>{phone.descripcion}</p>
              <p><strong>Precio</strong> ${phone.precio}</p>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <h1>{titulo}</h1>
      {contenido}
    </div>
  );
}
