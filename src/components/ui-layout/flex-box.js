import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ row }) => row ? 'row' : 'column'};
  flex-wrap: wrap;
`
