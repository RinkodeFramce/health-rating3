document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('improvementChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2000', '2005', '2010', '2015', '2020'],
        datasets: [{
          label: 'Рейтинг Южной Кореи',
          data: [65, 70, 78, 85, 92],
          borderColor: '#2196F3',
          fill: false
        }, {
          label: 'Рейтинг Таиланда',
          data: [50, 55, 60, 68, 75],
          borderColor: '#FF9800',
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true, max: 100 }
        }
      }
    });
  });