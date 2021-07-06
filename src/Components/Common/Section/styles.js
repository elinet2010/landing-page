import styled, { css } from 'styled-components'

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 100px);
  width: 100%;
  padding: 60px 0;
  ${(props) =>
    props.cover &&
    css`
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      text-align: center;
      opacity: 0.8;
      height: calc(100vh - 100px);
      align-items: center;
      display: flex;
    `}

    @media (max-width: 768px) {
      padding: 25px 0;
    }
`
