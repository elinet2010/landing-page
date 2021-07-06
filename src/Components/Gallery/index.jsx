import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import Section from "./../Common/Section/index";
import Nav from "./../Common/Nav/index";
import Results from "./../Results/index";
import Views from '../Common/Views';
import { ColNav } from "./../Common/Header/styles";

const Gallery = () => {
  return (
    <Section id="gallery">
      <Container>
      <Views/>
        <Row>
          <ColNav>
            <Nav gallery />
          </ColNav>
        </Row>
        <Row>
          <Col>
            <Results />
          </Col>
        </Row>
      </Container>
    </ Section >
  )
}

export default Gallery
