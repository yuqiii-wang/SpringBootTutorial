import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import services from '../services';
import ProductItem from '../components/ProductView';

const GetFakecompanyAllProductsScreen = () => {

  const [products, setProdcts] = useState(null)

  const fetchFakecompanyProducts = async () => {
    try {
      const resp = await services.getFakecompanyProducts();
      setProdcts(resp.data);
    } catch (error) {
      alert('Failed to fetch product data.');
    }
  }

  useEffect(() => {
    fetchFakecompanyProducts()
  }, [])

  if (!products) {
    return (
      <Container>
        <Col>
          <p>Loading data...</p>
        </Col>
      </Container>
    )
  }

  return (
    <Container style={{ padding: 16 }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Currency for Price</th>
            <th>Manufacture Location</th>
            <th>Product Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map(productItem => (
            <ProductItem
              name={productItem.name}
              price={productItem.price}
              currency={productItem.currency}
              manufactureLocation={productItem.manufactureLocation}
              description={productItem.description}
            />
          ))}
        </tbody>
      </Table>
    </Container >
  );
};

export default GetFakecompanyAllProductsScreen;
