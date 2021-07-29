const showPasswordElement = document.getElementById('show_password');
showPasswordElement.addEventListener('click', (event) => {
  changePasswordVisibility('password', event.target)
})

const showConfirmPasswordElement = document.getElementById('show_confirm_password');
showConfirmPasswordElement.addEventListener('click', (event) => {
  changePasswordVisibility('confirm_password', event.target)
})

const changePasswordVisibility = (passwordInputId, passwordIcon) => {
  const passwordInput = document.getElementById(passwordInputId);
  if(passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordIcon.src = 'assets/icons/open_eye.svg'
  }else {
    passwordInput.type = 'password';
    passwordIcon.src = 'assets/icons/close_eye.svg'
  }
}

const inputPhoneId = document.getElementById('tel')

inputPhoneId.addEventListener('keypress', (e) => handlePhoneMask(e.target.value));
inputPhoneId.addEventListener('keyup', (e) => handlePhoneMask(e.target.value));
inputPhoneId.addEventListener('change', (e) => handlePhoneMask(e.target.value));

const handlePhoneMask = (value) => {
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    inputPhoneId.value = value;
}

const passwordInput = document.getElementById("password");

passwordInput.oninvalid = () => {
  passwordInput.setCustomValidity("");
  if (!passwordInput.validity.valid) {
    passwordInput.setCustomValidity("A senha deve ter entre 6 e 10 caracteres e pelo menos 1 letra maiúscula, 1 minúscula e 1 número");
   }
};


const handleCardChange = (element) => {
  const cardElement = document.getElementById("cards-container");
  element.checked = true;
  cardElement.style.marginLeft = `-${element.value}%`;
}

window.addEventListener('resize', (event) => {
  if(event.target.innerWidth >= '769'){
    const cardElement = document.getElementById("cards-container");
    cardElement.style.marginLeft = '0';
  }
}) 