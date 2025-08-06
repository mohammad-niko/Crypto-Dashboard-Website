import { setIsHomeView } from "../router.js";
import {
  rendertrendingPart,
  rendertrending,
  renderAllCryptoPart,
  renderDataRow,
} from "../ui/homeUi.js";
import {
  fetchTrendingCoins,
  fetchTrendingDefiCoins,
  fetchBitcoinMarketChart,
  fetchAllCryptocurrencies,
} from "../api/homeApi.js";
import { renderBtcMarketCapChart } from "../chart.js";

export async function renderHomeView() {

  setIsHomeView(true);
  rendertrendingPart();

  const trendingCoinsData = await fetchTrendingCoins();
  const coin = document.querySelector(".trending-coins");
  trendingCoinsData.forEach((data, index) =>
    rendertrending(data.item, coin, index)
  );

  const trendingDdfiCoinsData = await fetchTrendingDefiCoins();
  const defi = document.querySelector(".trending-defi");
  trendingDdfiCoinsData.forEach((data, index) =>
    rendertrending(data, defi, index)
  );

  const btcChartData = await fetchBitcoinMarketChart();
  renderBtcMarketCapChart(btcChartData[0], btcChartData[1]);

  renderAllCryptoPart();
  const allCoinsData = await fetchAllCryptocurrencies();
  allCoinsData.forEach((data, index) => renderDataRow(data, index));
}
