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
    passwordIcon.src = '/assets/icons/open_eye.svg'
  }else {
    passwordInput.type = 'password';
    passwordIcon.src = '/assets/icons/close_eye.svg'
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

const openMenu = () => {
  const menuNav = document.getElementById("menu");
  const menuButton = document.getElementById("bt-menu");

  const menuList = document.getElementById("menu-list");
  const menuButtonList = document.getElementById("menu-buttons-container");

  if(menuButton.checked) {
    menuNav.style.height = "200px";
    menuList.style.display = "flex";
    menuButtonList.style.display = "flex";
  } else {
    menuNav.style.height = "0";
    menuList.style.display = "";
    menuButtonList.style.display = "";
  }
}

const passwordInput = document.getElementById("password");

passwordInput.oninvalid = () => {
  passwordInput.setCustomValidity("");
  if (!passwordInput.validity.valid) {
    passwordInput.setCustomValidity("A senha deve ter entre 6 e 10 caracteres e pelo menos 1 letra maiúscula, 1 minúscula e 1 número");
   }
};

const validateForm = (form) => {
  const { password, confirm_password, url, url_value } = form;

  const spanConfirmPasswordError = document.getElementById('confirm_password_error');
  const spanURLValueError = document.getElementById('url_value_error');

  if(password.value !== confirm_password.value) {
    confirm_password.style.borderColor = "red";
    spanConfirmPasswordError.style.opacity = 1;
    return false
  }

  if(url.value === "true" && url_value.value === "") {
    url_value.style.borderColor = "red";
    spanURLValueError.style.opacity = 1;
    return false
  }

  url_value.style.borderColor = "var(--color-black)";
  spanURLValueError.style.opacity = 0;

  confirm_password.style.borderColor = "var(--color-black)";
  spanConfirmPasswordError.style.opacity = 0;

  return true;
}

const handleSubmit = (formData) => {
  const action = "https://app.rdstation.com.br/signup";
  const httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        console.log(httpRequest.responseText);
    }
  }

  httpRequest.open("POST", action, true);
  httpRequest.send(formData);
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const validatedForm = validateForm(e.target);
  if(validatedForm) {
    const formData = new FormData(e.target);
    handleSubmit(formData);
  }
})