import styled from 'react-emotion'

export const StyledPageWrapper = styled('div')`
  max-width: 1320px;
  margin: 0 auto;
`

export const StyledProductWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  & > div {
    width: calc(100% - 2px);
  }
  @media (min-width: 600px) {
    & > div {
      width: calc(50% - 2px);
    }
  }
  @media (min-width: 900px) {
    & > div {
      width: calc(33.33% - 2px);
    }
  }
  @media (min-width: 1200px) {
    & > div {
      width: calc(25% - 2px);
    }
  }
`
