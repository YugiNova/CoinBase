import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { ChartWrapper, CoinLogo, Container, Description, Info, Logo, Name, Rank, Value } from "./styles";
import axios from "axios";
import { PushCoinDetail } from "../../redux/actions";
import { useEffect } from "react";
import { CoinDetails } from "../../redux/selectors";
import Chart from "chart.js/auto";
import CoinDetailChart from "./CoinDetailChart";
import {CaretUpOutlined,CaretDownOutlined} from "@ant-design/icons";

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

const valueChangeShow = (value) => {
  if(value > 0){
    return(
        <>
            <CaretUpOutlined />
            ${value.toFixed(2)}
        </>
    )
}else{
    return(
        <>
            <CaretDownOutlined />
            ${(value*(-1)).toFixed(2)}
        </>
    )
}
}

const CoinDetail = () => {
  const { coinID } = useParams();
  const dispatch = useDispatch();
  const coinDetails = useSelector(CoinDetails);

  const fetchData = () => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coinID}`)
      .then((res) => {
        dispatch(
          PushCoinDetail({
            name: res.data.name,
            symbol: res.data.image.large,
            info: res.data.description.en,
            price: res.data.market_data.current_price.usd,
            marketCap: res.data.market_data.market_cap.usd,
            marketCapRank: res.data.market_data.market_cap_rank,
            marketCapChange:
              res.data.market_data.market_cap_change_24h_in_currency.usd,
            marketCapChangePercent:
              res.data.market_data.market_cap_change_percentage_24h_in_currency
                .usd,
            priceChangePercent:
              res.data.market_data.price_change_percentage_24h_in_currency.usd,
            priceChange: res.data.market_data.price_change_24h_in_currency.usd,
          })
        );
      });

    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=usd&days=1`
      )
      .then((res) => {
        const priceData = res.data.prices.map((item) => {
          return item[1];
        });
        dispatch(
          PushCoinDetail({
            chartData: priceData,
          })
        );
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(coinDetails);
  }, [coinDetails]);

  return (
    <Container>
        <Name>
            <CoinLogo><Logo src={coinDetails.symbol}/></CoinLogo>
            <h2>{coinDetails.name}</h2>
        </Name>
      <Info>
        <Rank>Rank {coinDetails.marketCapRank}</Rank>
        <Value color={percentColor(coinDetails.priceChange)}>
            <h1>Price</h1>
            <h2>${coinDetails.price}</h2>
            <h3>{valueChangeShow(coinDetails.priceChange)}</h3>
            <h4>{percentShow(coinDetails.priceChangePercent)}</h4>
        </Value>
        <Value color={percentColor(coinDetails.marketCapChange)}>
            <h1>Market Cap</h1>
            <h2>${(coinDetails.marketCap/1000000000).toFixed(2)}B</h2>
            
            <h3>{valueChangeShow(coinDetails.marketCapChange/1000000000)}B</h3>
            <h4>{percentShow(coinDetails.marketCapChangePercent)}</h4>
        </Value>
      </Info>
      <ChartWrapper>
        <CoinDetailChart coinData={coinDetails.chartData} />
      </ChartWrapper>
      <Description>
      <h2>Description</h2>
      <p dangerouslySetInnerHTML={{__html:coinDetails.info}}></p>
      </Description>
    </Container>
  );
};

export default CoinDetail;
