import React from 'react';

const IncrementButton = ({ id, stock, onIncrement }) => {
  const handleIncrementClick = () => {
    if (onIncrement) {
      onIncrement(id, stock);
    }
  };

  return (
    <button onClick={handleIncrementClick} className="btn btn-info" disabled={stock <= 0}>
      +
    </button>
  );
};

export default IncrementButton;
