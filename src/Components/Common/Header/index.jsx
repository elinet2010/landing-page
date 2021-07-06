
import React from 'react'
import { Container, Col } from 'styled-bootstrap-grid'
import Nav from '../Nav'

import { HeaderContainer, Row, ColNav} from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Container >
        <Row>
          <Col col xl="3" lg="3" md="12" sm="12" className="text-center">
            <img src="images/Logo.svg" alt="logo" className="logo" />
          </Col>
          <ColNav col xl="9" lg="9" md="12" sm="12" >
            <Nav />
          </ColNav>
        </Row>
      </Container>
    </HeaderContainer>
  )
}

export default Header
