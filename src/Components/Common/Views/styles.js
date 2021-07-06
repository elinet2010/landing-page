import styled from 'styled-components'
import { Row as RowComponent } from 'styled-bootstrap-grid'

export const Row = styled(RowComponent)`
  align-items: center;
  align-self: center;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
`
