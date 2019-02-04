// document.addEventListener('DOMContentLoaded', (e) => {
  const notificationLink = document.querySelector('.notification-link');
  const notificationIndicator = document.querySelector('.notification-indicator');
  const notificationList = document.querySelector('.notification-list');
  const closeItems = document.querySelectorAll('.close');
  const alert = document.querySelector('.alert');

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


// });
