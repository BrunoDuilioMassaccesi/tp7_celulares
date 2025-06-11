import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../data.js';

export default function Productos() {
  const { idMarca } = useParams();
  const marcaIdNum = idMarca ? parseInt(idMarca) : null;

  const filteredPhones = marcaIdNum
    ? celulares.filter((cel) => cel.marcaId === marcaIdNum)
    : celulares;

  const marcaNombre = marcaIdNum
    ? marcas.find((m) => m.id === marcaIdNum)?.nombre
    : null;

  return (
    <div>
      <h1>Productos {marcaNombre ? `- ${marcaNombre}` : ''}</h1>
      {filteredPhones.length === 0 ? (
        <p>No hay celulares para mostrar.</p>
      ) : (
        <div className="phone-grid">
          {filteredPhones.map((phone) => (
            <div key={phone.id} className="phone-card">
              <h3>{phone.nombre}</h3>
              <img src={phone.fotos[0]} alt={phone.nombre} />
              <p>{phone.descripcion}</p>
              <p><strong>Precio:</strong> ${phone.precio}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
