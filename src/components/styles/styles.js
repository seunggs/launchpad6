import styled, { css } from 'styled-components'

export const StyledDiv = styled.div`
  ${({ theme: { div }}) => css`
    font-family: ${div.fontFamily};
  `}
`
export const StyledHeadline = styled(StyledDiv)`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`