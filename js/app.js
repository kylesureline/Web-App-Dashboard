// document.addEventListener('DOMContentLoaded', (e) => {
  const notificationLink = document.querySelector('.notification-link');
  const notificationIndicator = document.querySelector('.notification-indicator');
  const notificationList = document.querySelector('.notification-list');
  const closeItems = document.querySelectorAll('.close');
  const alert = document.querySelector('.alert');
  const sendMessageForm = document.querySelector('#message-user-form');
    const userSearch = sendMessageForm.querySelector('input');
    const userMessage = sendMessageForm.querySelector('textarea');
    const messageSent = sendMessageForm.querySelector('.message-sent');
    const userError = sendMessageForm.querySelector('.user-error');
  const users = ['Robert Camp', 'Juanita Dam', 'Tom English', 'Lewis Davis', 'Timothy Davis', 'Helen Shelby', 'Carmela Collins', 'Patrick Boldt', 'Richard Stowe', 'Grace Bartlett', 'Rebecca Villaneuva', 'Denise Mattson', 'Kevin Vong', 'Brittany Jones', 'Gretchen Pickering', 'Lorene Shepherd', 'Kimberli Folkes', 'Darren Chiaramonte', 'Peggy Carroll', 'Edwin Savage', 'Ruby Agostini', 'Jimmy Renfro', 'Mike Clark', 'Hazel Arvidson', 'Becky Phillips', 'Adrianne Jankows', 'Roy Spradlin', 'Andrew Ginder', 'Sheila Delisle', 'Jeffrey Bell', 'Juan Hoyt', 'Lane Greene', 'Stacy Rogers', 'John Ma', 'Oliver Stark', 'Nickolas Ponz', 'Monique Gutierrez', 'Lori Li', 'Kelly Lee', 'Isaac Jackson', 'Hailey Watson', 'Friedrick Evanston', 'Evan Tam', 'David Livingston', 'Charles Lexington', 'Adam Franklin', 'Jerry Montgomery', 'Paul Watson', 'Jen Smith', 'Steve Johnson', 'Sally Swenson', 'Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver', 'Bob Smith', 'Josie Pluck', 'Jessica Gutierrez', 'Greg Johnson', 'Zach Lee'];

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

  sendMessageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(userSearch.value !== '') {
      userSearch.value = '';
      userMessage.value = '';

      fadeIn(messageSent);
      setTimeout(()=>{
        fadeOut(messageSent);
      }, 3000);
    } else {
      userError.textContent = 'Enter a user, please.';
      fadeIn(userError);
    }
  });

// });
