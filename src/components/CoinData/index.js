import { useEffect, useMemo, useState } from "react";
import TableCoin from "./TableCoin";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { LoadData, SearchCoin } from "../../redux/actions";
import { Coins, SearchCoinData } from "../../redux/selectors";
import CoinCard from "./CoinCard";
import { CoinsTop, Container, Title } from "./styles";
import SearchBox from "../SearchBox";

const CoinData = () => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  const coins = useSelector(Coins);

  const fetchData = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=vi"
      )
      .then((res) => {
        dispatch(LoadData(res.data));
        // console.log(coins);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
      fetchData()
  },[])

  const coinsData = useMemo(() => {
    if (keyword) {
      const newCoins = coins.filter((item) => {
        return item.name.includes(keyword) || item.id.includes(keyword);
      });
      console.log(newCoins);
      return newCoins;
    } else {
      return coins;
    }
  }, [keyword, coins]);

  const coinsTop = useMemo(() => {
    const newCoins = coins.filter((item) => {
      return item.market_cap_rank <= 4;
    });
    return newCoins;
  }, [coins]);

  return (
    <Container>
      <Title>Top Coins</Title>
      <CoinsTop>
        {coinsTop.map((item) => {
          return <CoinCard coin={item} />;
        })}
      </CoinsTop>
      <Title>Tracking Data</Title>
      <SearchBox setKeyword={setKeyword} />
      <TableCoin coins={coinsData} />
    </Container>
  );
};

export default CoinData;
