import React, { useState } from 'react';

function ItemCount({ stock }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment} disabled={count >= stock}>+</button>
      <button>agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
