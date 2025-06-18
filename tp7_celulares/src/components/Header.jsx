import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { marcas } from '../data.js';

export default function Header() {

  //la funcion deplegable la sacamos de chatgpt pq visualmente quedaba muy bien el MouseEnter => Desplegable
  const [Desple, Desplegable] = useState(false);
  return (
    <header>
      <div className="logo">
        <NavLink to="/">Celulares</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/quienes-somos">Quienes somos</NavLink>
          </li>
          <li
            onMouseEnter={() => Desplegable(true)}
            onMouseLeave={() => Desplegable(false)}
            style={{ position: 'relative' }}
          >
            <span>Productos</span>
            {Desple && (
              <ul
                //cuando le pedi a chat q me ayude con lo q esta abajo de ${marca.id} me tiro esto arriba del estilo aca en el .jsx, no entiendo muy bien la diferencia pero corre bien
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  padding: '0.5rem',
                  listStyle: 'none',
                  margin: 0,
                  zIndex: 1000,
                }}
              >
                <li>
                  <NavLink to="/productos">Ver todos</NavLink>
                </li>
                {marcas.map((marca) => (
                  <li key={marca.id}>
                    <NavLink to={`/productos/${marca.id}`}>{marca.nombre}</NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
