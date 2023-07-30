const form = document.querySelector('#email-form');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
const tomatoColor = 'rgba(255, 98, 87, 1)';
const tomatoBkg = 'rgba(244, 124, 115, 0.1)';

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showError(message) {
  emailError.textContent = message;
  emailError.style.display = 'inline';
  emailInput.style.color = tomatoColor;
  emailInput.style.border = `1px solid ${tomatoColor}`;
  emailInput.style.backgroundColor = tomatoBkg;
}

function hideError() {
  emailError.style.display = 'none';
  emailInput.style.color = '';
  emailInput.style.border = '';
  emailInput.style.backgroundColor = '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = emailInput.value.trim();

  if (emailValue.length === 0) {
    showError('Email cannot be blank');
    return;
  }

  if (!isValidEmail(emailValue)) {
    showError('Email is invalid');
    emailInput.focus();
    return;
  }

  localStorage.setItem('email', emailValue);
  hideError();
  window.location.href = 'success.html';
  console.log('Email submitted:', emailValue);
});
