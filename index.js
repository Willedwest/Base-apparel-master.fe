//Getting object from the DOM 

const btn = document.querySelector('.submit');

let emailInput = document.querySelector('#email');

let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener('click', () => {
  emailInput.parentElement.classList.add('show')

  if (emailInput.value.matches(validRegex)) {
    return true
  } else if (emailInput.value = "") {
    emailInput.parentElement.classList.add('show')
    return false
  }
})