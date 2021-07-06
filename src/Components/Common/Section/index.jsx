import React from 'react'
import { Container } from './styles'

const Section = ({ children, ...props }) => {
  return (
      <Container { ...props}>
          {children}
      </Container>
  )
}

export default Section
