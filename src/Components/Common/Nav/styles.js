import styled, { css } from 'styled-components'

export const Container = styled.nav`
  ${(props) =>
    props.gallery &&
    css`
      justify-content: center;
      display: flex;
    `}

  @media (max-width: 768px) {
    width: fit-content;
    justify-content: center;
    margin: 0;
  }
`
export const Scroll = styled.div`
  @media (max-width: 768px) {
    justify-content: center;
    overflow-x: scroll;
    margin: 0;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  @media (max-width: 768px) {
    width: inherit;
    margin: 0 30px 0 -15px;
  }
`

export const ListItem = styled.li`
  margin: 0 3px;
`
