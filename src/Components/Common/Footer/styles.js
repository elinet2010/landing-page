import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.white};
  height: auto;
`
export const Copy = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  font-size: 13px;
  height: auto;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`
export const Social = styled.div`
  text-align: center;
  height: auto;
  margin: 45px auto 75px auto;
`
