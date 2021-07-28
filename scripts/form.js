const validateForm = (formElement) => {
  let allInputIsValid = true;
  const elements = formElement.elements

  for(index = 0; index < elements.length; index++) {
    const inputElement = elements[index];
    if(inputElement.id !== '') {
      const inputIsValid = handleValidateInput(inputElement);
      handleRenderInputError(inputElement, inputIsValid);
      allInputIsValid = inputIsValid;
    }
  }

  return allInputIsValid;
}

const handleSubmit = (formElement) => {
  const formData = new FormData();
  const elements = formElement.elements
  const inputsToSend = ['name', 'email', 'tel', 'occupation_position', 'password', 'url_value'];

  for(index = 0; index < elements.length; index++) {
    const inputElement = elements[index];
    if(inputsToSend.includes(inputElement.id)) {
      formData.append(inputElement.name, inputElement.value);
    }
  }

  const action = "https://app.rdstation.com.br/signup";
  const httpRequest = new XMLHttpRequest();

  httpRequest.open("POST", action);
  httpRequest.send(formData);
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        console.log("Send form - status: 200");
    }
  }
}


document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const formIsValid = validateForm(e.target);
  console.log(formIsValid)
  if(formIsValid) {
   handleSubmit(e.target);
   handleRenderFeedback(e.target);
  }
})

const handleInputOnChange = (inputElement) => {
  const inputIsValid = handleValidateInput(inputElement);
  handleRenderInputError(inputElement, inputIsValid);
}

const handleValidateInput = (inputElement) => {
  switch (inputElement.name) {
    case 'confirm_password':
      const passwordElement = document.getElementById('password');
      return passwordElement.value !== '' && inputElement.value === passwordElement.value;
    case 'url':
      const urlValueElement = document.getElementById('url_value');
      if(inputElement.value === 'false') {
        return true;
      }
      return urlValueElement.checkValidity() && urlValueElement.value !== '';
    case 'url_value':
      const urlElement = document.getElementById('url');
      if(urlElement.checked) {
        return inputElement.checkValidity() && inputElement.value !== '';
      }
      return true;
    default:
      return inputElement.checkValidity();
  }
}

const handleRenderInputError = (inputElement, isValid) => {
  const spanErrorId = inputElement.name === 'url' ? 'url_value_error' : `${inputElement.name}_error`;
  const spanError = document.getElementById(spanErrorId);

  let message = '';

  switch (inputElement.name) {
    case 'password':
      message = inputElement.value === '' ? 'Preencha esse campo' : 'A senha deve conter entre 5 e 10 caracteres com pelo menos um número, uma letra maiúscula e uma minúscula.';
      break;
    case 'confirm_password':
      const passwordElement = document.getElementById('password');
      message = passwordElement.value === '' ? 'Preencha esse campo' : 'As senhas devem ser iguais';
      break
    default:
      message = 'Preencha esse campo';
      break;
  }

  const inputWithError = inputElement.name === 'url' ? document.getElementById('url_value') : inputElement;
  if(isValid) {
    styleInputElementWithoutError(inputWithError, spanError);
  }else {
    styleInputElementWithError(inputWithError, spanError, message);
  }
}

const styleInputElementWithError = (inputElement, spanError, message) => {
  inputElement.style.borderColor = "red";
  spanError.innerText = message;
}

const styleInputElementWithoutError = (inputElement, spanError) => {
  inputElement.style.borderColor = "black";
  spanError.innerText = "";
}

const handleRenderFeedback = (formElement) => {
  const feedbackSubmit = document.getElementById("feedback-submit-container");
  formElement.style.display = 'none';
  feedbackSubmit.style.display = 'flex';
}