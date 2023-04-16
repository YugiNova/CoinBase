export const LoadData = (data) => {
    return{
        type: `coins/loadData`,
        payload: [...data]
    }
}

export const SearchCoin = (data) => {
    return{
        type: `coin/searchData`,
        payload: data
    }
}

export const PushCoinDetail = (data) => {
    return{
        type: `coin/loadCoinDetail`,
        payload: data
    }
}