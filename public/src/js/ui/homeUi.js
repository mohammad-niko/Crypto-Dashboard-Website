import { renderWeellyChart } from "../chart.js";
const main = document.querySelector("main");

export function rendertrendingPart() {
  const parentContainer = document.createElement("div");
  parentContainer.classList.add("parent-container");
  main.appendChild(parentContainer);
  //---------------------Trending coin
  const trendingCoinsCard = document.createElement("div");
  trendingCoinsCard.classList.add("main-card", "trending-coins");
  parentContainer.appendChild(trendingCoinsCard);

  const coinsHeaderContainer = document.createElement("div");
  coinsHeaderContainer.classList.add("header-container");
  trendingCoinsCard.appendChild(coinsHeaderContainer);

  const coinsHeader = document.createElement("h5");
  coinsHeader.classList.add("header-title");
  coinsHeader.textContent = "Trending Coins";
  coinsHeaderContainer.appendChild(coinsHeader);

  const coinsIcon = document.createElement("i");
  coinsIcon.classList.add("header-icon", "bi", "bi-chevron-right");
  coinsHeaderContainer.appendChild(coinsIcon);

  const trendingCoinsContent = document.createElement("div");
  trendingCoinsContent.classList.add("trending-content");
  trendingCoinsCard.appendChild(trendingCoinsContent);

  //---------------------Trending DeFi
  const trendingDefiCard = document.createElement("div");
  trendingDefiCard.classList.add("main-card", "trending-defi");
  parentContainer.appendChild(trendingDefiCard);

  const defiHeaderContainer = document.createElement("div");
  defiHeaderContainer.classList.add("header-container");
  trendingDefiCard.appendChild(defiHeaderContainer);

  const defiHeader = document.createElement("h5");
  defiHeader.classList.add("header-title");
  defiHeader.textContent = "Trending DeFi";
  defiHeaderContainer.appendChild(defiHeader);

  const defiIcon = document.createElement("i");
  defiIcon.classList.add("header-icon", "bi", "bi-chevron-right");
  defiHeaderContainer.appendChild(defiIcon);

  const trendingDefiContent = document.createElement("div");
  trendingDefiContent.classList.add("trending-content");
  trendingDefiCard.appendChild(trendingDefiContent);

  //---------------------BTC Market Cap
  const btcMarketCapCard = document.createElement("div");
  btcMarketCapCard.classList.add("main-card", "btc-market-cap");
  parentContainer.appendChild(btcMarketCapCard);

  const canvas = document.createElement("canvas");
  canvas.classList.add("main-canvas");
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  btcMarketCapCard.appendChild(canvas);
}

export function rendertrending(data, elm, index) {
  const coinCard = document.createElement("div");
  coinCard.classList.add("coin-card-item");
  elm.appendChild(coinCard);

  const coinInfoContainer = document.createElement("div");
  coinInfoContainer.classList.add("coin-info");
  coinCard.appendChild(coinInfoContainer);

  const coinIndex = document.createElement("span");
  coinIndex.classList.add("coin-info-index");
  coinIndex.textContent = index + 1;
  coinInfoContainer.appendChild(coinIndex);

  const coinLogo = document.createElement("img");
  coinLogo.classList.add("coin-info-logo");
  if (data?.thumb) {
    coinLogo.src = data.thumb;
  } else {
    coinLogo.src = data.image;
  }
  coinLogo.alt = "Coin Logo";
  coinInfoContainer.appendChild(coinLogo);

  const coinSymbol = document.createElement("span");
  coinSymbol.classList.add("coin-info-symbol");
  coinSymbol.textContent = data.symbol;
  coinInfoContainer.appendChild(coinSymbol);

  const coinPrice = document.createElement("div");
  coinPrice.classList.add("coin-price");
  if (data?.data?.price) {
    coinPrice.textContent =
      data.data.price < 1
        ? data.data.price.toFixed(5)
        : data.data.price.toFixed(2);
  } else {
    coinPrice.textContent =
      data.current_price < 1
        ? data.current_price.toFixed(5)
        : data.current_price.toFixed(2);
  }

  coinCard.appendChild(coinPrice);
}

export function renderAllCryptoPart() {
  const allCrypto = document.createElement("div");
  allCrypto.classList.add("all-crypto-container");
  main.appendChild(allCrypto);

  // tab and title
  const tab = document.createElement("div");
  tab.classList.add("tab");
  allCrypto.appendChild(tab);

  const tabTitle = document.createElement("div");
  tabTitle.classList.add("tab-title");
  tabTitle.textContent = "All Crypto";
  tab.appendChild(tabTitle);

  // table
  const table = document.createElement("table");
  table.classList.add("table");
  allCrypto.appendChild(table);

  const thead = document.createElement("thead");
  thead.classList.add("thead");
  table.appendChild(thead);

  const headerRow = document.createElement("tr");
  thead.appendChild(headerRow);

  const th0 = document.createElement("th");
  th0.classList.add("header-number");
  headerRow.appendChild(th0);

  const th1 = document.createElement("th");
  th1.classList.add("header-number");
  th1.textContent = "#";
  headerRow.appendChild(th1);

  const th2 = document.createElement("th");
  th2.classList.add("header-name");
  th2.textContent = "Name";
  headerRow.appendChild(th2);

  const th3 = document.createElement("th");
  th3.classList.add("header-price");
  th3.textContent = "Price";
  headerRow.appendChild(th3);

  const th4 = document.createElement("th");
  th4.classList.add("header-one-hour");
  th4.textContent = "1h %";
  headerRow.appendChild(th4);

  const th5 = document.createElement("th");
  th5.classList.add("header-twenty-four-hour");
  th5.textContent = "24h %";
  headerRow.appendChild(th5);

  const th6 = document.createElement("th");
  th6.classList.add("header-seven-day");
  th6.textContent = "7d %";
  headerRow.appendChild(th6);

  const th7 = document.createElement("th");
  th7.classList.add("header-market-cap");
  th7.textContent = "Market Cap";
  headerRow.appendChild(th7);

  const th8 = document.createElement("th");
  th8.classList.add("header-volume");
  th8.textContent = "Volume (24h)";
  headerRow.appendChild(th8);

  const th9 = document.createElement("th");
  th9.classList.add("header-circulating-supply");
  th9.textContent = "Circulating Supply";
  headerRow.appendChild(th9);

  const th10 = document.createElement("th");
  th10.classList.add("header-last-seven-days");
  th10.textContent = "Last 7 Days";
  headerRow.appendChild(th10);

  const tbody = document.createElement("tbody");
  tbody.classList.add("tbody");
  table.appendChild(tbody);
}

export function renderDataRow(data, index) {
  const tbody = document.querySelector("tbody");

  const dataRow = document.createElement("tr");
  dataRow.classList.add("data-row");
  dataRow.setAttribute("scope", "row");
  tbody.appendChild(dataRow);

  const td0 = document.createElement("td");
  td0.classList.add("nothing", "td");
  dataRow.appendChild(td0);

  // like star
  const star = document.createElement("i");
  star.classList.add("bi", "bi-star", "love-coin");
  td0.appendChild(star);

  const td1 = document.createElement("td");
  td1.classList.add("number", "td");
  td1.textContent = index + 1;
  dataRow.appendChild(td1);

  const td2 = document.createElement("td");
  td2.classList.add("name");
  dataRow.appendChild(td2);

  // coin info
  const coinImg = document.createElement("img");
  coinImg.classList.add("all-coin-crypto-img");
  coinImg.src = data.image;
  coinImg.alt = "logo";
  td2.appendChild(coinImg);

  const nameAndSymbol = document.createElement("span");
  nameAndSymbol.classList.add("name-and-symbol");
  nameAndSymbol.textContent = `${data.name} (${data.symbol})`;
  td2.appendChild(nameAndSymbol);

  const td3 = document.createElement("td");
  td3.classList.add("price", "td");
  td3.textContent =
    data.current_price < 1
      ? `$${data.current_price.toFixed(5)}`
      : `$${data.current_price.toFixed(2)}`;
  dataRow.appendChild(td3);

  const td4 = document.createElement("td");
  td4.classList.add("one-hour-change", "td");
  td4.textContent = `${data.ath_change_percentage.toFixed(2)}%`;
  if (data.ath_change_percentage.toFixed(2) < 0) {
    td4.style.color = "red";
  } else {
    td4.style.color = "green";
  }
  dataRow.appendChild(td4);

  const td5 = document.createElement("td");
  td5.classList.add("twenty-four-hour-change", "td");
  td5.textContent = `${data.price_change_percentage_24h.toFixed(2)}%`;
  if (data.price_change_percentage_24h.toFixed(2) < 0) {
    td5.style.color = "red";
  } else {
    td5.style.color = "green";
  }
  dataRow.appendChild(td5);

  const td6 = document.createElement("td");
  td6.classList.add("seven-day-change", "td");
  if (data.price_change_percentage_7d_in_currency) {
    td6.textContent = `${data.price_change_percentage_7d_in_currency.toFixed(
      2
    )}%`;
    if (data.price_change_percentage_7d_in_currency.toFixed(2) < 0) {
      td6.style.color = "red";
    } else {
      td6.style.color = "green";
    }
  } else {
    td6.textContent = `${0.0}%`;
    td6.style.color = "green";
  }

  dataRow.appendChild(td6);
  const td7 = document.createElement("td");
  td7.classList.add("market-cap", "td");
  td7.textContent = `$${data.market_cap.toLocaleString()}`;
  dataRow.appendChild(td7);

  const td8 = document.createElement("td");
  td8.classList.add("volume", "td");
  td8.textContent = `$${data.total_volume.toLocaleString()}`;
  dataRow.appendChild(td8);

  const td9 = document.createElement("td");
  td9.classList.add("circulating-supply", "td");
  td9.textContent = data.circulating_supply.toLocaleString();
  dataRow.appendChild(td9);

  const td10 = document.createElement("td");
  td10.classList.add("last-seven-days", "td");
  dataRow.appendChild(td10);

  const canvas = document.createElement("canvas");
  canvas.classList.add(`weekly-chart-${index}`, "canvas-weekly");
  td10.appendChild(canvas);

  renderWeellyChart(data.sparkline_in_7d, index);
}
