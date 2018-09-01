import styled from 'react-emotion'

export const StyledHeader = styled('header')`
  background-color: ${props => props.theme.colors.blue};
  height: 3.35em;
  padding: 0 1.25em;
  position: relative;
  margin-bottom: 1.25em;
  & > h1 {
    margin: 0;
    line-height: 1.5em;
  }
`
