import styled from 'styled-components'
import { Row as RowComponent, Col } from 'styled-bootstrap-grid'

export const HeaderContainer = styled.header`
  background: #fff;
  width: 100%;
  height: auto;
`
export const Row = styled(RowComponent)`
    height: 100px;
    align-items: center;
    .logo {
      @media (max-width: 768px) {
        margin-top: 10px;
      }
    }
`

export const ColNav= styled(Col)`
   @media (max-width: 768px) {
    position: relative;
    padding: 0;
    &:before {
      position: absolute;
      display: block;
      content: '';
      top: 0;
      left: 0;
      width: 30px;
      height: 40px;
      background: linear-gradient(85deg, #E9E9E9, transparent);
    }
    &:after {
      position: absolute;
      display: block;
      content: '';
      top: 0;
      left: auto;
      right: 0;
      width: 30px;
      height: 40px;
      background: linear-gradient(-85deg, #E9E9E9, transparent);
    }
  }
`
