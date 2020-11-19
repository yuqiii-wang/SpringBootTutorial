import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';
import services from '../services';

const ProductItem = ({ name, price, currency, manufactureLocation, description }) => {

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{currency}</td>
      <td>{manufactureLocation}</td>
      <td>{description}</td>
    </tr>
  );
};

export default ProductItem;
