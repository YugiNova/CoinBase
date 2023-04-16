import { Card, Change, Image, Name, Price } from "./styles";
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

const CoinCard = ({coin}) => {

    return(
        <Card to={`/Detail/${coin.id}`}>
            <Image src={coin.image}/>
            <Name>{coin.name}</Name>
            <Price>${coin.current_price}</Price>
            <Change color={percentColor(coin.price_change_percentage_24h)}>{percentShow(coin.price_change_percentage_24h)}</Change>
        </Card>
    )
}

export default CoinCard;