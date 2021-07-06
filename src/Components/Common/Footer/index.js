import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import { FooterContainer, Copy, Social } from './styles'

const Footer = () => {
  const name = 'Sneak'
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col>
            <Copy>
              © 2016 - <span>{name}</span> All Right Reserved
            </Copy>
          </Col>
        </Row>
        <Row>
          <Col>
            <Social>
              <img src="/images/Social-Icons.svg" alt="Social" />
            </Social>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  )
}

export default Footer
