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

  const feedbackSubmit = document.getElementById("feedback-submit-container");

  const validatedForm = validateForm(e.target);
  if(validatedForm) {
    const formData = new FormData(e.target);
    //handleSubmit(formData);
    e.target.style.display = 'none';
    feedbackSubmit.style.display = 'flex';
  }
})