import styled from "styled-components";

export const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 32px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(${({row}) => row || 6}, 1fr);
    grid-auto-flow: column;
  }
`