import { Table } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CoinsTable = styled(Table)`
  width: 100%;
  min-height: 45rem;
  border: 1px solid #ff9332;
  border-radius: 1rem;
  overflow: hidden;

  .ant-table-tbody > tr > td {
    border-bottom: rgba(255, 147, 50, 0.5) 1px solid;
  }

  .ant-table-thead > tr > td{
    border: none;
  }

  .ant-table-tbody {
    tr.ant-table-placeholder{
      .ant-table-cell{
        padding: 0 !important;
      }
    }

    .ant-table-row {
      background-color: black;

      .ant-table-cell{
        padding: 0.5rem 1rem;

        
      }
    }
  }

  .ant-table-thead .ant-table-cell {
    background-color: black;
    color: #bfbfbf;
    border-bottom: rgba(255, 147, 50, 0.5) 1px solid;

    ::before{
        width: 0px !important;
    }
  }

  ul {
    background-color: black;
    margin: 0 !important;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center !important;
    align-items: center;

    li {
      background-color: white;
      border-radius: 50% !important;

      button{
        background-color: black !important;
        color:#ff9332 !important;
      }

      .ant-select-selector{
        background-color: #ff9332 !important;
        color:black !important;
        border: none !important;
      }
    }

    .ant-pagination-item {
      background-color: transparent;
      

      a{
        color: #bfbfbf !important;
      }
    }

    .ant-pagination-item-active{
        background: #ff9332;
        border: none;

        a{
            color: black !important;
        }
    }

    .ant-pagination-item-container{
        background-color: black !important;

        span{
        color: #bfbfbf !important;
      }
    }

    
  }

  .ant-table-tbody > tr.ant-table-row:hover > td,
  .ant-table-tbody > tr > td.ant-table-cell-row-hover {
    background: rgba(255, 147, 50, 0.3);
  }
`;

export const CoinRank = styled.div`
  font-weight: bold;
  color: #bfbfbf;
`;

export const CoinName = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  color: white;

  img {
    margin: 5px;
    width: 2rem;
  }

  span{
    text-transform: uppercase;
    color: #bfbfbf;
    font-weight: normal;
    margin-left: 5px;
  }

  :hover{
    color: #ff9332;
  }
`;

export const ChangePercent = styled.div`
  color: ${(props) => props.color.colorFont};
  background: ${(props) => props.color.background};
  font-weight: bold;
  width: 5rem;
  padding: 0.25rem 0.25rem;
  text-align: center;
  border-radius: 0.5rem;

  svg {
    margin-right: 5px;
  }
`;

export const Price = styled.div`
  font-weight: bold;
  color: white;
`;

export const MarketCap = styled.div`
  font-weight: bold;
  color: #bfbfbf;
`;

export const EmptyDisplay = styled.div`
  width: 100%;
  background-color: black;
  height: 100%;
  padding: 20rem 0;

  h2{
    font-size: 3rem;
    font-weight: bold;
    color: #ff9332;
    margin: 0;
  }
`