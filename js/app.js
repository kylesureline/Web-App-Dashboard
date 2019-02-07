// document.addEventListener('DOMContentLoaded', (e) => {
  const notificationLink = document.querySelector('.notification-link');
  const notificationIndicator = document.querySelector('.notification-indicator');
  const notificationList = document.querySelector('.notification-list');
  const closeItems = document.querySelectorAll('.close');
  const alert = document.querySelector('.alert');
  const settingsForm = document.querySelector('.settings form');
  const sendMessageForm = document.querySelector('#message-user-form');
    const userSearch = sendMessageForm.querySelector('input');
    const userMessage = sendMessageForm.querySelector('textarea');
    const messageSent = sendMessageForm.querySelector('.message-sent');
    const userError = sendMessageForm.querySelector('.user-error');
  const users = ['Robert Camp', 'Juanita Dam', 'Tom English', 'Lewis Davis', 'Timothy Davis', 'Helen Shelby', 'Carmela Collins', 'Patrick Boldt', 'Richard Stowe', 'Grace Bartlett', 'Rebecca Villaneuva', 'Denise Mattson', 'Kevin Vong', 'Brittany Jones', 'Gretchen Pickering', 'Lorene Shepherd', 'Kimberli Folkes', 'Darren Chiaramonte', 'Peggy Carroll', 'Edwin Savage', 'Ruby Agostini', 'Jimmy Renfro', 'Mike Clark', 'Hazel Arvidson', 'Becky Phillips', 'Adrianne Jankows', 'Roy Spradlin', 'Andrew Ginder', 'Sheila Delisle', 'Jeffrey Bell', 'Juan Hoyt', 'Lane Greene', 'Stacy Rogers', 'John Ma', 'Oliver Stark', 'Nickolas Ponz', 'Monique Gutierrez', 'Lori Li', 'Kelly Lee', 'Isaac Jackson', 'Hailey Watson', 'Friedrick Evanston', 'Evan Tam', 'David Livingston', 'Charles Lexington', 'Adam Franklin', 'Jerry Montgomery', 'Paul Watson', 'Jen Smith', 'Steve Johnson', 'Sally Swenson', 'Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver', 'Bob Smith', 'Josie Pluck', 'Jessica Gutierrez', 'Greg Johnson', 'Zach Lee'];
  const Data = {
    email: false,
    public: false,
    timezone: 'America/Los_Angeles'
  };

  function supportsLocalStorage() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e){
      return false;
    }
  }

  function save() {
    if(supportsLocalStorage()) {
      localStorage.setItem('WebAppDashboardData', JSON.stringify(Data));
    }
  }

  function load() {
    if(supportsLocalStorage()) {
      if(localStorage.getItem('WebAppDashboardData') !== '') {
        const d = JSON.parse(localStorage.getItem('WebAppDashboardData'));
        for(p in d) {
          Data[p] = d[p];
        }
        const checkboxes = settingsForm.querySelectorAll('input[type=checkbox]');
        const email = checkboxes[0];
        const public = checkboxes[1];
        const timezone = settingsForm.querySelector('select');
        email.checked = Data.email;
        public.checked = Data.public;
        timezone.value = Data.timezone;
      }
    }
  }

  function close(target) {
    const parent = target.parentElement;
    const grandparent = parent.parentElement;
    grandparent.removeChild(parent);

    if(notificationList.children.length === 0) {
      notificationList.style.display = 'none';
      notificationIndicator.style.display = 'none';
    }
  }

  function fadeIn(target) {
    setTimeout(() => {
      target.removeAttribute('style');
    }, 250);
  }

  function fadeOut(target) {
    target.style.opacity = 0;
  }

  function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { //up
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }

  // load saved settings
  load();

  // demo alerts and notifications
  fadeIn(alert);
  // fadeIn(notificationList);
  fadeIn(notificationIndicator);

  autocomplete(userSearch, users);

  // event listeners
  for(let i = 0; i < closeItems.length; i++) {
    let item = closeItems[i];
    item.addEventListener('click', (e) => {
      close(e.target);
    });
  }
  notificationLink.addEventListener('click', ()=> {
    function toggleNotifications() {
      if(notificationList.style.display !== 'none') {
        notificationList.style.display = 'none';
      } else if(notificationList.children.length !== 0) {
        notificationList.style.display = '';
      }
    }
    toggleNotifications();
  });

  userSearch.addEventListener('keyup', (e) => {
    fadeOut(userError);
  });
  userMessage.addEventListener('keyup', (e) => {
    fadeOut(userError);
  });

  settingsForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const checkboxes = settingsForm.querySelectorAll('input[type=checkbox]');
    const email = checkboxes[0].checked;
    const public = checkboxes[1].checked;
    const timezone = settingsForm.querySelector('select').value;
    Data.email = email;
    Data.public = public;
    Data.timezone = timezone;

    save();
  });

  sendMessageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(userSearch.value !== '' && userMessage.value !== '') {
      userSearch.value = '';
      userMessage.value = '';

      fadeIn(messageSent);
      setTimeout(()=>{
        fadeOut(messageSent);
      }, 3000);
    } else {
      if(userSearch.value === '') {
        userError.textContent = 'Add a user, please.';
      } else if(userMessage.value === '') {
        userError.textContent = 'Compose a message, please.';
      }

      fadeIn(userError);
    }
  });

  // Chart.js charts
  // var ctxTraffic = document.getElementById("traffic-chart").getContext('2d');
  // var weeklyTrafficChart = new Chart(ctxTraffic, {
  //   type: 'line',
  //   data: {
  //     labels: ["18-24", "25-1", "2-8", "9-15", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-2"],
  //     datasets: [{
  //       label: '',
  //       data: [0, 750, 1250, 1000, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //       ],
  //       borderColor: [
  //         'rgba(255,99,132,1)',
  //       ],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     elements: {
  //       line: {
  //         tension: 0,
  //       }
  //     },
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero:true
  //         }
  //       }]
  //     }
  //   }
  // });

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
