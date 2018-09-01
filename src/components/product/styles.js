import styled from 'react-emotion'

export const StyledLabel = styled('div')`
  color: #fff;
  font-size: 1em;
  height: 100%;
  max-width: 45%;
  text-align: center;
  text-transform: capitalize;
  line-height: 3.125em;
`

export const StyledProduct = styled('div')`
  padding: 1.25em;
  outline-color #e1e1e1 !important;
  outline: 1px solid;
  margin-top: 1px;
  margin-left: 1px;
  & img {
    width: 100%;
  }
`

export const StyledLabelBlock = styled('div')`
  height: 3.125em;
  display: block;
  vertical-align: middle;
  margin: 0.65em 0;
`

export const StyledSale = styled(StyledLabel)`
  background-color: ${props => props.theme.colors.red};
`

export const StyledExclusive = styled(StyledLabel)`
  background-color: ${props => props.theme.colors.green};
`

export const StyledProductInfo = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  & h2 {
    font-size: 1.25rem;
    font-weight: 400;
    margin: 0;
  }
  & p {
    font-size: 2.25rem;
    margin: 0;
  }
`
