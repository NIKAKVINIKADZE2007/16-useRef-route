import React from 'react';
import { useParams } from 'react-router-dom';
const ItemsDetails = () => {
  const { id } = useParams();
  return <div>ItemsDetails</div>;
};

export default ItemsDetails;
