import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Button } from 'react-bootstrap';
import services from '../services';
import PhotoItem from '../components/PhotoItem';

const TempHomeScreen = () => {
    return (
        <Container style={{ padding : 16 }}>
          <Row>
          <Link to={`/product/show_all`}>
            <Button variant="primary">View ALl Products</Button>
          </Link>
          </Row>
        </Container>
      );
}

export default TempHomeScreen;