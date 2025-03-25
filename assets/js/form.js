/////////////////////////////////////////////////
// form validation
/////////////////////////////////////////////////
// Déclarer les constantes
const FORM = document.getElementById("contact-form");
const ERROR = document.getElementById("errorArea");
console.log(FORM);

// déclarer les variables
let formName = document.getElementById("formName");
let address = document.getElementById("address");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");

// déclarer les variables des labels
let labelName = document.querySelector(".labelName");
let labelAddress = document.querySelector(".labelAddress");
let labelEmail = document.querySelector(".labelEmail");
let labelPhone = document.querySelector(".labelPhone");
let labelMessage = document.querySelector(".labelMessage");

FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  // déclare les regex
  let regexName = /^[A-Za-z]+$/;
  let regexMail = /^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
  let regexPhone =
    /^(?:(?:\+33|0033)[\s.-]?(?:\(0\))?|0)[1-9](?:[\s.-]?\d{2}){4}$/;

  // déclare les valeurs
  let valueName = formName.value.trim();
  let valueAddress = address.value.trim();
  let valueEmail = email.value.trim();
  let valuePhone = phone.value.trim();
  let valueMessage = message.value.trim();

  console.log(valueName);

  // créer les messages d'erreur
  function addError(errorClass, message) {
    errorClass = document.createElement("div");
    errorClass.classList.add("alert", "alert-danger", "my-2", "text-center");
    errorClass.textContent = message;
    ERROR.appendChild(errorClass);
  }

  // créer le message de success
  function addSucces(successClass, message) {
    successClass = document.createElement("div");
    successClass.classList.add("alert", "alert-success", "my-2", "text-center");
    successClass.textContent = message;
    ERROR.appendChild(successClass);
  }

  // vérifier que tous les champs sont remplis
  let verif = true;
  ERROR.innerHTML = ""; // Clear previous errors
  formName.classList.remove("is-invalid");
  email.classList.remove("is-invalid");
  phone.classList.remove("is-invalid");
  message.classList.remove("is-invalid");

  if (
    !valueName ||
    !valueAddress ||
    !valueEmail ||
    !valuePhone ||
    !valueMessage
  ) {
    addError("emptyError", "All fields must be filled in");
    verif = false;
  } else {
    if (verif) {
      // vérifier chaque champ du formulaire

      let isError = false;
      console.log(valueName);

      if (valueName.length < 3 && !regexPhone.test(valueName)) {
        addError(
          "nameError",
          "Name must be have more than 2 characters and not contain numbers or special characters"
        );
        labelName.classList.remove("invisible");
        labelAddress.classList.remove("invisible");
        formName.classList.add("is-invalid");

        isError = true;
      }

      if (!regexMail.test(valueEmail)) {
        addError("emailError", "Invalid email address");
        labelEmail.classList.remove("invisible");
        labelAddress.classList.remove("invisible");
        isError = true;
      }

      if (!regexPhone.test(valuePhone)) {
        addError("phoneError", "Invalid phone number");
        labelPhone.classList.remove("invisible");
        labelAddress.classList.remove("invisible");
        phone.classList.add("is-invalid");
        isError = true;
      }

      if (valueMessage.length < 20) {
        addError("messageError", "Message must be at least 20 characters");
        labelMessage.classList.remove("invisible");
        labelAddress.classList.remove("invisible");
        message.classList.add("is-invalid");
        isError = true;
      }

      if (!isError) {
        addSucces("formSuccess", "you have successfully sent the form");
      }
    }
  }
});
