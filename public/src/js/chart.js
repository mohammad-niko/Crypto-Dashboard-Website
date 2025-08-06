export function renderBtcMarketCapChart(labels, data) {
  const ctx = document.querySelector(".main-canvas").getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Bitcoin Price (USD)",
          data: data,
          borderColor: "#2196F3",
          backgroundColor: "rgba(33, 150, 243, 0.25)",
          tension: 0.45,
          fill: true,
          pointRadius: 3,
          pointBackgroundColor: "#2196F3",
          pointBorderColor: "#FFFFFF",
          pointBorderWidth: 1.5,
          pointHoverRadius: 7,
          pointHoverBackgroundColor: "#FFFFFF",
          pointHoverBorderColor: "#2196F3",
          pointHoverBorderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#ECEFF1",
            font: {
              size: 15,
              family: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
            },
            boxWidth: 0
          },
        },
        tooltip: {
          backgroundColor: "rgba(33, 33, 33, 0.9)",
          titleColor: "#64B5F6",
          bodyColor: "#ECEFF1",
          borderColor: "#2196F3",
          borderWidth: 1,
          cornerRadius: 6,
          displayColors: false,
          bodyFont: {
            size: 14
          }
        },
      },
      scales: {
        x: {
          ticks: {
            maxTicksLimit: 12,
            color: "#B0BEC5",
            font: {
              size: 11,
              family: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
            },
          },
          grid: {
            color: "rgba(255, 255, 255, 0.08)",
            borderColor: "rgba(255, 255, 255, 0.1)",
            drawBorder: true,
            drawOnChartArea: true,
            drawTicks: false
          },
        },
        y: {
          beginAtZero: false,
          ticks: {
            color: "#B0BEC5",
            font: {
              size: 11,
              family: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
            },
            callback: function (value) {
              return "$" + value.toLocaleString();
            },
          },
          grid: {
            color: "rgba(255, 255, 255, 0.08)",
            borderColor: "rgba(255, 255, 255, 0.1)",
            drawBorder: true,
            drawOnChartArea: true,
            drawTicks: false
          },
        },
      },
      animation: {
        duration: 1200,
        easing: 'easeOutQuart',
      }
    },
  });
}


export function renderWeellyChart(data, index) {
  const ctx = document.querySelector(`.weekly-chart-${index}`);

  if (!data || !Array.isArray(data.price)) {
    console.error("Invalid data format:", data);
    return;
  }

  const prices = data.price;
  const labels = prices.map((_, index) => index + 1);

  new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          data: prices,
          borderColor: "#00ff99",
          borderWidth: 1,
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: false,
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: { display: false },
        y: { display: false },
      },
    },
  });
}
