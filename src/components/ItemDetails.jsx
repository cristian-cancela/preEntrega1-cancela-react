
import React from 'react';
import ItemCount from './ItemCount';


function ItemDetails({ stock }) {
  return (
    <div>
      <ItemCount stock={stock} />
    </div>
  );
}

export default ItemDetails;
