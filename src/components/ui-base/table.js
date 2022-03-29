import styled from "styled-components";

export const Table = styled.table`
  border: none;
  border-collapse: collapse;
  margin-top: 24px;

  td, th {
    border: 1px solid #ccc;
    padding: 8px 12px;
    
    :first-child {
      width: 108px;
    }
    :nth-child(2) {
      width: 192px;
    }
    :last-child {
      text-align: center;
      font-size: 20px;
      padding-block: 0;
      width: 72px;
    }
  }
  thead {
    background-color: #eee;
  }
`