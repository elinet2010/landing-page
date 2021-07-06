import styled from 'styled-components'
import { Row as RowComponent } from 'styled-bootstrap-grid'

export const Row = styled(RowComponent)`
  align-items: center;
  margin: 40px auto;
  justify-content: center;
`

export const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 30px;
  text-align: center;
  justify-content: center;
  grid-auto-flow: row dense;
  grid-auto-columns: 250px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const GridItem = styled.div`
  min-height: 250px;
  height: auto;
  background: rgba(233, 233, 233, 0.7);
  padding: 10px;
  position: relative;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 10%;
    width: 80%;
    height: 1px;
    background: #fff;
  }

  &:first-of-type {
    height: 320px;
    grid-row: span 1;
  }
  &:nth-of-type(2) {
    height: 250px;
    grid-row: span 1;
  }
  &:nth-of-type(5) {
    margin-top: -70px;
  }

  &:nth-of-type(3n + 3) {
    grid-row: span 2;
  }
  &:nth-of-type(4) {
    grid-row: span 2;
  }
  &:nth-of-type(9n + 9) {
    grid-row: span 1;
  }

  &:hover {
    transform: scale(1.01);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  span {
    display: block;
    position: absolute;
    top: 55%;
    left: 10%;
    width: 80%;
    color: #fff;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
  }
`
