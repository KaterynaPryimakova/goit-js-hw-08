import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInput, 1000));
form.addEventListener('submit', clearForm);

const data = {
  userEmail: '',
  userMessage: '',
};

if (localStorage.getItem('feedback-form-state')) {
  const userData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (userData.userEmail) {
    const inputEmail = document.querySelector('input[name="email"]');
    inputEmail.value = userData.userEmail;
  }

  if (userData.userMessage) {
    const textareaMessage = document.querySelector('textarea[name="message"]');
    textareaMessage.value = userData.userMessage;
  }
}

function onInput({ target }) {
  if (target.name === 'email') {
    data.userEmail = target.value;
  } else if (target.name === 'message') {
    data.userMessage = target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}
function clearForm(event) {
  event.preventDefault();
  const userData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(userData);

  localStorage.clear();
  form.reset();
}
