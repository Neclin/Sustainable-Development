function onResponse(response) {
  return response.text();
}

function onResultReady(text) {
  const confirmationDiv = document.querySelector("#entryConfirmation");
  // Remove any previous confirmation text
  if (confirmationDiv.hasChildNodes()) {
    confirmationDiv.removeChild(confirmationDiv.childNodes[0]);
  }
  const confirmationText = document.createElement("p");
  confirmationText.innerHTML = text;
  confirmationText.id = "entryConfirmText";
  confirmationDiv.appendChild(confirmationText);
}

function processForm(e) {
  e.preventDefault();

  const userFirstName = document.querySelector("#firstName").value;
  const userLastName = document.querySelector("#lastName").value;
  const userEmail = document.querySelector("#email").value;
  const userComment = document.querySelector("#comments").value;

  const formResult = {
    firstName: userFirstName,
    lastName: userLastName,
    email: userEmail,
    comment: userComment,
  };

  const formResultJSON = JSON.stringify(formResult);

  const fetchFormResult = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: formResultJSON,
  };

  fetch("http://localhost:3000/form", fetchFormResult)
    .then(onResponse)
    .then(onResultReady);
}

const form = document.querySelector("#form");
form.addEventListener("submit", processForm);
