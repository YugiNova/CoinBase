import { Button, Table } from "antd";
import {CaretUpOutlined,CaretDownOutlined} from "@ant-design/icons";
import {
  ChangePercent,
  CoinName,
  CoinRank,
  CoinsTable,
  EmptyDisplay,
  MarketCap,
  Price,
} from "./styles";
import Icon from "@ant-design/icons/lib/components/Icon";
import { useEffect, useMemo, useState } from "react";

const percentColor = (percent) => {
  if (percent > 0) {
    return {colorFont:"#6cc12a", background: "rgba(108, 193, 42, 0.3)"};
  } else {
      return {colorFont:"#ff4d4d", background: "rgba(255, 77, 77, 0.3)"};
  }
};

const percentShow = (percent) => {
    if(percent > 0){
        return(
            <div>
                <CaretUpOutlined />
                {percent.toFixed(2)}%
            </div>
        )
    }else{
        return(
            <div>
                <CaretDownOutlined />
                {(percent*(-1)).toFixed(2)}%
            </div>
        )
    }
}

const getWindowSize = () => {
  const {innerWidth,innerHeight} = window;
  return {innerWidth,innerHeight}
}



const TableCoin = ({ coins }) => {
  const [windowSize,setWindowSize] = useState(getWindowSize())
  

  const columnsMobile = [
    {
      title: "#",
      dataIndex: "rank",
      key: "rank",
      render: (_, item) => {
        return <CoinRank>{item.market_cap_rank}</CoinRank>;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, item) => {
        return (
          <CoinName to={`/CoinBase/Detail/${item.id}`}>
            <img src={item.image} />
            {item.name}
            <span>   • {item.symbol}</span>
          </CoinName>
        );
      },
    },
    {
      title: "Change (24h)",
      dataIndex: "change",
      key: "change",
      render: (_, item) => {
        return (
          <ChangePercent color={percentColor(item.price_change_percentage_24h)}>
                {percentShow(item.price_change_percentage_24h)}
          </ChangePercent>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_, item) => {
        return <Price>${item.current_price}</Price>;
      },
    },
  ];
  
  
  const columnsDesktop = [
    {
      title: "#",
      dataIndex: "rank",
      key: "rank",
      render: (_, item) => {
        return <CoinRank>{item.market_cap_rank}</CoinRank>;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, item) => {
        return (
          <CoinName to={`/Detail/${item.id}`}>
            <img src={item.image} />
            {item.name}
            <span>   • {item.symbol}</span>
          </CoinName>
        );
      },
    },
    {
      title: "Change (24h)",
      dataIndex: "change",
      key: "change",
      render: (_, item) => {
        return (
          <ChangePercent color={percentColor(item.price_change_percentage_24h)}>
                {percentShow(item.price_change_percentage_24h)}
          </ChangePercent>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_, item) => {
        return <Price>${item.current_price}</Price>;
      },
    },
    {
      title: "Market Cap",
      dataIndex: "marketCap",
      key: "marketCap",
      render: (_, item) => {
        return (
          <MarketCap>${(item.market_cap / 1000000000).toFixed(1)}B</MarketCap>
        );
      },
    },
  ];

  const [columnsLayout, setColumnsLayout] = useState(columnsMobile);

  useEffect(()=> {
    if(windowSize.innerWidth<=600 && windowSize.innerWidth>=300){
      setColumnsLayout(columnsMobile)
    }
    else if(windowSize.innerWidth> 1200){
      setColumnsLayout(columnsDesktop)
    }
  },[windowSize.innerWidth])

  useEffect(()=> {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  },[])

  

  let locale = {
    emptyText: (
      <EmptyDisplay>
        <h2>Oops! Can't find your coins</h2>
      </EmptyDisplay>
    )
  };

  return <CoinsTable locale={locale} columns={columnsLayout} dataSource={coins} />;
};

export default TableCoin;
