// Пример данных с регионами и причинами
const countryData = [
    { 
      country: "Швейцария", 
      region: "Европа", 
      income: "Высокий",
      healthcare: 98, 
      diseaseRate: 120, 
      lifeExpectancy: "83 года", 
      healthSpending: "$7000", 
      reason: "Высокий уровень жизни, обязательное медицинское страхование"
    },
    { 
      country: "Сингапур", 
      region: "Азия", 
      income: "Высокий",
      healthcare: 95, 
      diseaseRate: 150, 
      lifeExpectancy: "82 года", 
      healthSpending: "$4000", 
      reason: "Государственные инвестиции в здравоохранение"
    },
    { 
      country: "Нигерия", 
      region: "Африка", 
      income: "Низкий",
      healthcare: 45, 
      diseaseRate: 400, 
      lifeExpectancy: "55 лет", 
      healthSpending: "$100", 
      reason: "Низкий ВВП, дефицит медперсонала"
    }
  ];
  
  // Добавление данных в таблицу
  document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#country-table tbody");
    const healthChartCanvas = document.getElementById('healthChart');
    const diseaseChartCanvas = document.getElementById('diseaseChart');
    let healthChart, diseaseChart;
  
    // Функция отрисовки таблицы и графика
    function renderData(data) {
      tableBody.innerHTML = "";
      data.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${row.country}</td>
          <td>${row.region}</td>
          <td>${row.income}</td>
          <td>${row.healthcare}</td>
          <td>${row.diseaseRate}</td>
          <td>${row.lifeExpectancy}</td>
          <td>${row.healthSpending}</td>
          <td>${row.reason}</td>
        `;
        tableBody.appendChild(tr);
      });
  
      // Очистка графиков
      if (healthChart) healthChart.destroy();
      if (diseaseChart) diseaseChart.destroy();
  
      // График рейтинга
      healthChart = new Chart(healthChartCanvas, {
        type: 'bar',
        data: {
          labels: data.map(item => item.country),
          datasets: [{
            label: 'Рейтинг (1-100)',
            data: data.map(item => item.healthcare),
            backgroundColor: '#4CAF50'
          }]
        },
        options: { scales: { y: { beginAtZero: true } } }
      });
  
      // График заболеваемости
      diseaseChart = new Chart(diseaseChartCanvas, {
        type: 'line',
        data: {
          labels: data.map(item => item.country),
          datasets: [{
            label: 'Заболеваемость (на 1000 чел.)',
            data: data.map(item => item.diseaseRate),
            borderColor: '#f44336',
            fill: false
          }]
        },
        options: { scales: { y: { beginAtZero: true } } }
      });
    }
  
    // Инициализация
    renderData(countryData);
  
    // Фильтрация по региону и доходу
    const regionFilter = document.getElementById('region-filter');
    const incomeFilter = document.getElementById('income-filter');
  
    function applyFilters() {
      const region = regionFilter.value;
      const income = incomeFilter.value;
      let filteredData = countryData;
  
      if (region !== "all") {
        filteredData = filteredData.filter(item => item.region === region);
      }
      if (income !== "all") {
        filteredData = filteredData.filter(item => item.income === income);
      }
  
      renderData(filteredData);
    }
  
    regionFilter.addEventListener('change', applyFilters);
    incomeFilter.addEventListener('change', applyFilters);
  });