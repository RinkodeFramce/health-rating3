// js/data.js
const countryData = [
  { 
    country: "Швейцария", 
    region: "Европа", 
    income: "Высокий",
    healthcare: 98, 
    diseaseRate: 120, 
    lifeExpectancy: "83 года", 
    healthSpending: "$7000", 
    reason: "Высокий уровень жизни, обязательное медицинское страхование, доступность профилактической помощи",
    flag: "images/switzerland-flag.svg"
  },
  { 
    country: "Сингапур", 
    region: "Азия", 
    income: "Высокий",
    healthcare: 95, 
    diseaseRate: 150, 
    lifeExpectancy: "82 года", 
    healthSpending: "$4000", 
    reason: "Государственные инвестиции в здравоохранение",
    flag: "images/singapore-flag.svg"
  },
  { 
    country: "Нигерия", 
    region: "Африка", 
    income: "Низкий",
    healthcare: 45, 
    diseaseRate: 400, 
    lifeExpectancy: "55 лет", 
    healthSpending: "$100", 
    reason: "Низкий ВВП, дефицит медперсонала, слабая инфраструктура",
    flag: "images/nigeria-flag.svg"
  },
  { 
    country: "Япония", 
    region: "Азия", 
    income: "Высокий",
    healthcare: 94, 
    diseaseRate: 160, 
    lifeExpectancy: "84 года", 
    healthSpending: "$5000", 
    reason: "Здоровое питание, культура профилактических осмотров",
    flag: "images/japan-flag.svg"
  },
  { 
    country: "Южная Корея", 
    region: "Азия", 
    income: "Средний",
    healthcare: 92, 
    diseaseRate: 180, 
    lifeExpectancy: "83 года", 
    healthSpending: "$4500", 
    reason: "Цифровизация услуг, государственные программы",
    flag: "images/south-korea-flag.svg"
  },
  { 
    country: "Таиланд", 
    region: "Азия", 
    income: "Средний",
    healthcare: 75, 
    diseaseRate: 200, 
    lifeExpectancy: "75 лет", 
    healthSpending: "$1200", 
    reason: "Увеличение бюджета на здравоохранение",
    flag: "images/thailand-flag.svg"
  },
  { 
    country: "Россия", 
    region: "Европа", 
    income: "Средний",
    healthcare: 70, 
    diseaseRate: 250, 
    lifeExpectancy: "73 года", 
    healthSpending: "$1800", 
    reason: "Улучшение системы здравоохранения за последние 10 лет",
    flag: "images/russia-flag.svg"
  },
  { 
    country: "Индия", 
    region: "Азия", 
    income: "Низкий",
    healthcare: 60, 
    diseaseRate: 300, 
    lifeExpectancy: "69 лет", 
    healthSpending: "$200", 
    reason: "Перенаселение, слабая инфраструктура, низкий уровень профилактики",
    flag: "images/india-flag.svg"
  },
  { 
    country: "Канада", 
    region: "Северная Америка", 
    income: "Высокий",
    healthcare: 90, 
    diseaseRate: 180, 
    lifeExpectancy: "82 года", 
    healthSpending: "$6000", 
    reason: "Универсальная система здравоохранения, доступность вакцин",
    flag: "images/canada-flag.svg"
  }
];

// Добавление данных в таблицу
document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#country-table tbody");
  const healthChartCanvas = document.getElementById('healthChart');
  const diseaseChartCanvas = document.getElementById('diseaseChart');
  let healthChart, diseaseChart;

  // Функция отрисовки таблицы и графиков
  function renderData(data) {
    tableBody.innerHTML = "";
    data.forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><img src="${row.flag}" alt="Флаг ${row.country}" class="country-flag-table"> ${row.country}</td>
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
    const countryData = [
      {
        country: "Швейцария",
        region: "Европа",
        income: "Высокий",
        healthcare: 98,
        diseaseRate: 120,
        lifeExpectancy: "83 года",
        healthSpending: "$7000",
        reason: "Высокий уровень жизни, обязательное страхование",
        flag: "images/switzerland-flag.svg"
      },
      {
        country: "Нигерия",
        region: "Африка",
        income: "Низкий",
        healthcare: 45,
        diseaseRate: 400,
        lifeExpectancy: "55 лет",
        healthSpending: "$100",
        reason: "Низкий ВВП, дефицит медперсонала",
        flag: "images/nigeria-flag.svg"
      },
      {
        country: "Япония",
        region: "Азия",
        income: "Высокий",
        healthcare: 94,
        diseaseRate: 160,
        lifeExpectancy: "84 года",
        healthSpending: "$5000",
        reason: "Здоровое питание, культура профилактических осмотров",
        flag: "images/japan-flag.svg"
      },
      {
        country: "Южная Корея",
        region: "Азия",
        income: "Средний",
        healthcare: 92,
        diseaseRate: 180,
        lifeExpectancy: "83 года",
        healthSpending: "$4500",
        reason: "Цифровизация услуг, государственные программы",
        flag: "images/south-korea-flag.svg"
      },
      {
        country: "Таиланд",
        region: "Азия",
        income: "Средний",
        healthcare: 75,
        diseaseRate: 200,
        lifeExpectancy: "75 лет",
        healthSpending: "$1200",
        reason: "Увеличение бюджета на здравоохранение",
        flag: "images/thailand-flag.svg"
      },
      {
        country: "Россия",
        region: "Европа",
        income: "Средний",
        healthcare: 70,
        diseaseRate: 250,
        lifeExpectancy: "73 года",
        healthSpending: "$1800",
        reason: "Улучшение системы здравоохранения за последние 10 лет",
        flag: "images/russia-flag.svg"
      },
      {
        country: "Индия",
        region: "Азия",
        income: "Низкий",
        healthcare: 60,
        diseaseRate: 300,
        lifeExpectancy: "69 лет",
        healthSpending: "$200",
        reason: "Перенаселение, слабая инфраструктура",
        flag: "images/india-flag.svg"
      },
      {
        country: "Канада",
        region: "Северная Америка",
        income: "Высокий",
        healthcare: 90,
        diseaseRate: 180,
        lifeExpectancy: "82 года",
        healthSpending: "$6000",
        reason: "Универсальная система здравоохранения",
        flag: "images/canada-flag.svg"
      }
    ];

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
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
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
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
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