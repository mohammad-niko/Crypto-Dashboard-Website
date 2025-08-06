export async function fetchTrendingCoins() {
  try {
    const { data } = await axios(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    // console.log(data.coins);
    return data.coins;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchTrendingDefiCoins() {
  try {
    const { data } = await axios(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=decentralized-finance-defi&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchBitcoinMarketChart() {
  try {
    const { data } = await axios(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30"
    );
    // console.log(data);
    const labels = data.prices.map((price) => {
      const date = new Date(price[0]);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    });

    const prices = data.prices.map((price) => price[1]);

    return [labels, prices];
  } catch (error) {
    console.log(error);
  }
}

export async function fetchAllCryptocurrencies() {
  try {
    const { data } = await axios(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d"
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
