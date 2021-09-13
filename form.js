function validation() {
  const mail = document.getElementById('mail').value;
  const country = document.getElementById('country').value;
  const code = document.getElementById('code').value;
  const pass = document.getElementById('pass').value;
  const pass1 = document.getElementById('pass1').value;
  if (mail === '') {
    document.getElementById('email').innerHTML = '* Please fill the email field .';
    return false;
  }
  if (mail.indexOf('@') <= 0) {
    document.getElementById('email').innerHTML = '* Please include an @ in email address. missing @';
    return false;
  }
  if (mail.charAt(mail.length - 4) !== '.') {
    document.getElementById('email').innerHTML = '* Please include an . in email address. missing .';
    return false;
  }

  if (country === '') {
    document.getElementById('count').innerHTML = '* Please select the country';
    return false;
  }

  if (code === '') {
    document.getElementById('zipcode').innerHTML = '* Please fill the zipcode field';
    return false;
  }

  if (pass === '') {
    document.getElementById('pwd').innerHTML = '* Please enter the password';
    return false;
  }
  if (pass.length < 8 || pass.length > 20) {
    document.getElementById('pwd').innerHTML = '* Length of Password must be 8 characters or more ';
    return false;
  }

  if (pass1 === '') {
    document.getElementById('pwd1').innerHTML = '* Please reenter the password';
    return false;
  }
  if (pass1.length < 8 || pass1.length > 20) {
    document.getElementById('pwd1').innerHTML = '* Length of Password must be 8 characters or more ';
    return false;
  }

  if (pass !== pass1) {
    document.getElementById('pwd1').innerHTML = '* Please enter the correct password';
    return false;
  }
}
