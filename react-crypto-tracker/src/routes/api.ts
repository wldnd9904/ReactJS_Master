const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
    return fetch(`${BASE_URL}/coins`).then((result)=>result.json()).then((json)=>json.slice(0,30));
}

export function fetchCoinInfo(coinId:string|undefined){
    return fetch(`${BASE_URL}/coins/${coinId}`).then((result)=>result.json());
}

export function fetchCoinTickers(coinId:string|undefined){
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((result)=>result.json());
}