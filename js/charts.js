document.addEventListener('DOMContentLoaded', (e) => {
  // traffic buttons
  const traffic_btns = document.querySelector('.traffic-intervals');

  // DATASETS
  const TrafficData = {
    hourly: {
      data: [12, 20, 4, 30, 22, 8, 6, 10, 15, 12, 18, 22],
      labels: ['1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12am']
    },
    daily: {
      data: [250, 225, 220, 250, 275, 250, 325, 300],
      labels: ['1/27', '1/28', '1/29', '1/30', '1/31', '2/1', '2/2']
    },
    weekly: {
      data: [0, 750, 1250, 1000, 1250, 2000, 1500, 1750, 2000, 2250, 2000, 2200],
      labels: ['18-24', '25-1', '2-8', '9-15', '16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-2']
    },
    monthly: {
      data: [2000, 4500, 3000, 4250, 5550, 6000],
      labels: ['August', 'September', 'October', 'November', 'December', 'January']
    }
  }
  // monthly
  const monthly_data = [];
  const monthly_labels = [];
  // contexts
  const traffic_ctx = document.getElementById('traffic-chart').getContext('2d');
  const daily_ctx = document.getElementById('daily-traffic-chart').getContext('2d');
  const mobile_ctx = document.getElementById('mobile-users-chart').getContext('2d');

  function updateWeeklyTrafficChart(selection) {
    weeklyTrafficChart.data.labels = TrafficData[selection].labels;
    weeklyTrafficChart.data.datasets[0].data = TrafficData[selection].data;
    weeklyTrafficChart.update();
  }

  traffic_btns.addEventListener('click', (e)=> {
    let target = e.target;
    let listItems = traffic_btns.children;
    if(!target.className.includes('selected')) {
      for(let i = 0; i < listItems.length; i++) {
        listItems[i].className = listItems[i].className.replace(' selected', '');
      }
      target.className += ' selected';
      updateWeeklyTrafficChart(target.textContent.toLowerCase());
    }
  });

  let weeklyTrafficChart = new Chart(traffic_ctx, {
    type: 'line',
    data: {
      labels: TrafficData.weekly.labels,
      datasets: [{
        data: TrafficData.weekly.data,
        backgroundColor: 'rgba(104, 108, 183, 0.2)',
        borderColor: 'rgba(104, 108, 183, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: false
      },
      legend: {
        display: false
      },
      elements: {
        line: {
          tension: 0,
        }
      }
    }
  });

  let dailyTrafficChart = new Chart(daily_ctx, {
    type: 'bar',
    data: {
      labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      datasets: [{
        data: [75, 100, 175, 125, 225, 200, 100],
        backgroundColor: 'rgba(104, 108, 183, 1)',
        borderColor: 'rgba(104, 108, 183, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: false
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

  let mobileUsersChart = new Chart(mobile_ctx, {
    type: 'doughnut',
    data: {
      labels: ["Phones", "Tablets", "Desktops"],
      datasets: [{
        label: '# of Votes',
        data: [100, 50, 300],
        backgroundColor: [
          'rgba(129, 176, 189, 1)',
          'rgba(145, 196, 151, 1)',
          'rgba(104, 108, 183, 1)'
        ],
        borderColor: [
          'rgba(129, 176, 189, 1)',
          'rgba(145, 196, 151, 1)',
          'rgba(104, 108, 183, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        position: 'right',
        labels: {
          boxWidth: 20,
          padding: 24,
          fontSize: 16
        }
      },
      title: {
        display: false
      },
      scales: {
        yAxes: [{
          display: false,
        }]
      }
    }
  });
});
