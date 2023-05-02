var salesChart = new Chart(document.getElementById('sales-chart'), {
    type: 'doughnut',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Sales',
        data: [50000, 75000, 100000, 125000],
        backgroundColor: ['#89CFF0', '#00FFFF', '#7DF9FF', '#4BC0C0']
      }]
    },
    options: {
      title: {
        display: true,
        fontSize: 12, /* adjust as needed */
        text: 'Financial Year 2023 Sales'
      },
      plugins: {
        datalabels: {
          display: true
        }
      },
      legend: {
        labels: {
          fontSize: 12 /* adjust as needed */
        }
      }
    }
  });
  
  var profitChart = new Chart(document.getElementById('profit-chart'), {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Net Profit',
        data: [3000, 2000, 4000, 1000, 5000, 2000, 7000, 6000, 3000, 5000, 8000, 9000],
        fill: false,
        borderColor: '#4BC0C0',
        borderWidth: 2
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Net Profit in 2023'
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });