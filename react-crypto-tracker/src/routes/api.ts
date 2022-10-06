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

export function fetchCoinHistory(coinId:string){
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60*60*24*7;
    return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}&start=${startDate}&end=${endDate}`).then((result)=>result.json());
}