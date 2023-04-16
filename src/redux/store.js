const initState = {
    coins: [],
    coinsSearch: [],
    coinDetail:{
        name: "", //name
        symbol: "",//image.large
        info: "",//description.en

        price: 0,//market_data.current_price.usd/vnd
        priceChangePercent: 0,//market_data.price_change_percentage_24h_in_currency.usd/vnd
        priceChange: 0,//market_data.price_change_24h_in_currency.usd/vnd

        marketCap: 0,//market_data.market_cap.usd/vnd
        marketCapChangePercent: 0,//market_data.market_cap_change_percentage_24h_in_currency.usd/vnd 
        marketCapChange:0,//market_data.market_cap_change_24h_in_currency.usd/vnd
        
        marketCapRank: 0,//market_data.market_cap_rank
        chartData:[]//prices
    }
}

const rootReducer = (state=initState, action) => {
    switch(action.type){
        case `coins/loadData`:
            return{
                ...state,
                coins: [...action.payload]
            }
        case `coin/searchData`:
            return{
                ...state,
                coinsSearch: [...action.payload]
            }
        case `coin/loadCoinDetail`:
            return{
                ...state,
                coinDetail: {...state.coinDetail,...action.payload}
            }
        default:
            return state;
    }
}

export default rootReducer;
