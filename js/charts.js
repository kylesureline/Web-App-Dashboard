// document.addEventListener('DOMContentLoaded', (e) => {
  const data = [0, 750, 1250, 1000, 1250, 2000, 1500, 1750, 2000, 2250, 2000, 2200];

  var ctxTraffic = document.getElementById("traffic-chart").getContext('2d');
  var weeklyTrafficChart = new Chart(ctxTraffic, {
    type: 'line',
    data: {
      labels: ["18-24", "25-1", "2-8", "9-15", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-2"],
      datasets: [{
        data: data,
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

  // var dailyTrafficChart = document.getElementById("daily-traffic-chart").getContext('2d');
  // var myChart = new Chart(dailyTrafficChart, {
  //   type: 'bar',
  //   data: {
  //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)'
  //       ],
  //       borderColor: [
  //         'rgba(255,99,132,1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)'
  //       ],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero:true
  //         }
  //       }]
  //     }
  //   }
  // });
  // var mobileUsersChart = document.getElementById("mobile-users-chart").getContext('2d');
  // var myChart = new Chart(mobileUsersChart, {
  //   type: 'bar',
  //   data: {
  //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)'
  //       ],
  //       borderColor: [
  //         'rgba(255,99,132,1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)'
  //       ],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero:true
  //         }
  //       }]
  //     }
  //   }
  // });
// });
