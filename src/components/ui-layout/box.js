import styled from 'styled-components'
import { Flex } from './flex-box'

export const Box = styled(Flex)`
  margin: 8px;
  padding: ${({ noPadding }) => noPadding ? '0' : '8px 0'};
  background-color: white;
  border: none;
  align-items: stretch;
  width: 100%;
  max-width: 540px;

  @media (min-width: 640px) {
    border: 1px solid #aaa;
  }
`