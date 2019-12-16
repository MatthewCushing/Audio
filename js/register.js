const checkUsername = () => {
  let username = document.querySelector('#username');

  if (username.value === '') {
    document.querySelector('.text-error').style.display = 'block';
    username.focus();
    return false;
  }

  document.querySelector('.text-error').style.display = 'none';
  username.focus();
  return true;
};

const checkDate = () => {
  const dateFormat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  let date = document.querySelector('#date');

  if (date.value.match(dateFormat)) {
    document.querySelector('.date-error').style.display = 'none';
    date.focus();
    return true;
  }

  document.querySelector('.date-error').style.display = 'block';
  date.focus();
  return false;
};

const checkEmail = () => {
  let email = document.querySelector('#email');
  let confirmEmail = document.querySelector('#confirm-email');
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value.match(mailFormat) && email.value.match(confirmEmail)) {
    document.querySelector('.email-error').style.display = 'none';
    email.focus();
    return true;
  }

  email.value.match(mailFormat)
    ? (document.querySelector('.email-error').style.display = 'block')
    : (document.querySelector('.email-match-error').style.display = 'block');
  email.focus();
  return false;
};

const checkPassword = () => {
  let password = document.querySelector('#password');
  let confirmPassword = document.querySelector('#confirm-password');

  if (password.value === '' && password.value.match(confirmPassword)) {
    document.querySelector('.text-error').style.display = 'none';
    password.focus();
    return true;
  }

  password.value === ''
    ? (document.querySelector('.text-error').style.display = 'block')
    : (document.querySelector('.password-match-error').style.display = 'block');
  password.focus();
  return false;
};

function stopReloadOnSubmit(e) {
  console.log(e);
  e.preventDefault();
}

const onSubmit = () => {
  document.querySelector('.form-error').style.display = 'none';
  const form = document.querySelector('#main-form');
  form.addEventListener('submit', stopReloadOnSubmit);

  if (checkUsername()) {
    if (checkDate()) {
      if (checkEmail()) {
        if (checkPassword()) {
          return true;
        }
      }
    }
  }

  return false;
};
