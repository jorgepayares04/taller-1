import React, { useState } from 'react';
import Card from './Card';
import Contador from './Contador';
import './UserCard.css';

function App() {
  const [contador, setContador] = useState(0);
  const [tarjetas, setTarjetas] = useState([]);

  const incrementarContador = () => {
    if (tarjetas.length < 6) {
      setContador(contador + 1);
      const nuevaTarjeta = {
        id: tarjetas.length + 1,
        title: `Lorem  ${tarjetas.length + 1}`,
        body: `es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500`,
        image: `https://picsum.photos/500/300/?image=${tarjetas.length + 20}`,
      };
      setTarjetas([...tarjetas, nuevaTarjeta]);
    }
  };

  const decrementarContador = () => {
    if (tarjetas.length > 0) {
      setContador(contador - 1);
      const nuevasTarjetas = tarjetas.slice(0, tarjetas.length - 1);
      setTarjetas(nuevasTarjetas);
    }
  };

  const resetearContador = () => {
    setContador(0);
    setTarjetas([]);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Tarea #1</h1>
      <Contador
        onIncrement={incrementarContador}
        onDecrement={decrementarContador}
        onReset={resetearContador}
      />
      <div className="card-container">
        {tarjetas.map((item, index) => (
          <Card key={item.id} data={item} contador={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default App;
