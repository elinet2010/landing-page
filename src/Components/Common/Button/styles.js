import styled, { css } from 'styled-components'

export const Container = styled.button`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray};
  padding: 8px 27px;
  width: auto;
  height: ${(props) => (props.height ? props.height : '35px')};
  border: none;
  font-family: 'Questrial', sans-serif;
  font-size: 14px;
  letter-spacing: 0.2em;
  &:hover {
    transition: all 0.3s;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }

  ${(props) =>
    props.active &&
    css`
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    `}

  ${(props) =>
    props.secundary &&
    css`
      height: 40px;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 11px;
      &:hover {
        border: 2px solid ${({ theme }) => theme.colors.white};
      }
    `}


    ${(props) =>
    props.views &&
    css`
       padding: 8px 8px 5px 8px;
       margin: 5px;
       height: auto;
      &:hover {
        path {
          fill: ${({ theme }) => theme.colors.white};
        }
      }
    `}
`
