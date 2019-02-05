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
  const users = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver', 'Bob Smith', 'Josie Pluck', 'Jessica Gutierrez', 'Greg Johnson', 'Zach Lee'];

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


  // demo alerts and notifications
  fadeIn(alert);
  fadeIn(notificationList);
  fadeIn(notificationIndicator);

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
