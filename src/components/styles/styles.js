import styled, { css } from 'styled-components'

export const StyledDiv = styled.div`
  ${({ theme: { div }}) => css`
    font-family: ${div.fontFamily};
  `}
`