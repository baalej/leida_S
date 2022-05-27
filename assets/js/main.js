let init = () => {
  let subscribe = document.querySelector('#subscribe');

  setTimeout(() => {
    subscribe.style.display = 'block';
  }, 1000);

  let subscribeClose = document.querySelector('#subscribe-close');
  subscribeClose.addEventListener('click', () => {
    subscribe.style.display = 'none';
  })
}

document.addEventListener('DOMContentLoaded', init, false);