import styled from 'styled-components'

export const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  background-color: #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  
  @media (min-width: 640px) {
    padding: 16px;
  }
  
  @media (min-width: 768px) {
    flex-direction: ${({ flexRow }) => flexRow ? 'row' : 'column'};
    min-height: 320px;
  }
`