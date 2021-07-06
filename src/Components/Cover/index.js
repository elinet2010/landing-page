import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { H2, Text } from './styles'
import Button from './../Common/Button/index'
import Section from "./../Common/Section/index";

const Cover = () => {
  return (
    <Section cover>
      <Container>
        <Row>
          <Col>
            <H2>EXPLORE BEYOND HORIZON</H2>
          </Col>
        </Row>
        <Row justifyContent="center">
          <Col col xl="6" lg="6" md="8" sm="12">
            <Text>
              Magna mundi referrentur quo, no rebum dignissim qui. Per quodsi
              accusata id, agam labores
            </Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button secundary>VIEW OUR WORK</Button>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default Cover
