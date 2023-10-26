import React from 'react';

const DecrementButton = ({ id, cantidad, onDecrement }) => {
  const handleDecrementClick = () => {
    if (onDecrement) {
      if (cantidad > 1) {
        
        onDecrement(id, cantidad - 1);
      } else {
       
        onDecrement(id, 0);
      }
    }
  };

  return (
    <button onClick={handleDecrementClick} className="btn btn-info">
      -
    </button>
  );
};

export default DecrementButton;
