import React from 'react';

const Contador = ({ onIncrement, onDecrement, onReset }) => {
  return (
    <div className="contador">
      <h2>Contador</h2>
      <button onClick={onIncrement}>Incrementar</button>
      <button onClick={onDecrement}>Decrementar</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Contador;
