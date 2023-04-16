import Search from "antd/es/input/Search"
import { useEffect } from "react";
import { Container, Placeholder, SearchCoins } from "./styles";

const SearchBox = ({setKeyword}) => {
    const onChange = (e) => {
        setKeyword(e.target.value);
    }

    return(
        <Container>
            <SearchCoins onChange={onChange} placeholder=" "/>
            <Placeholder>Coins</Placeholder>
        </Container>
        
    )
}

export default SearchBox;