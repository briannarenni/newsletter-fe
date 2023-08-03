const storedEmail = localStorage.getItem('email');
const dismissBtn = document.querySelector('#dismiss-btn');
const emailValue = document.querySelector('.submitted-email');

emailValue.textContent = storedEmail;

dismissBtn.addEventListener('click', () => {
  localStorage.removeItem('email');
  window.location.href = 'index.html';
});
