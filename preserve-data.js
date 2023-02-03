const form = document.getElementById('form');
const btn = document.getElementById('btn-form');
const emailInput = document.getElementById('email');
const textareaInput = document.getElementById('textarea');
const nameInput = document.getElementById('name');

btn.addEventListener('click', () => {
  const email = emailInput.value;
  const textarea = textareaInput.value;
  const name = nameInput.value;

  let userData = JSON.parse(localStorage.getItem('userData'));
  if (userData == null) {
    userData = [];
  }

  userData.push({
    email,
    textarea,
    name,
  });
  localStorage.setItem('userData', JSON.stringify(userData));
});

function show() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  for (let index = 0; index < userData.length; index += 1) {
    emailInput.value = userData[index].email;
    textareaInput.value = userData[index].textarea;
    nameInput.value = userData[index].name;
  }
}

document.addEventListener('DOMContentLoaded', show);

form.addEventListener('load', () => {
  show();
});