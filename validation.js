const btnFormEl = document.querySelector('#btn-form');
function validate() {
  const emailInput = document.getElementById('email').value;
  document.forms[0].onsubmit = function email(e) {
    const emailValidation = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    if (!(emailValidation.test(emailInput))) {
      document.getElementById('message').innerHTML = 'Please use a lowercase text for the email';
      document.getElementById('message').style.color = 'white';
      document.getElementById('message').style.visibility = 'visible';
      document.getElementById('message').style.textAlign = 'center';
      e.preventDefault();
    }
  };
  document.getElementById('message').innerHTML = '';
  return true;
}

btnFormEl.addEventListener(('click'), () => {
  validate();
});