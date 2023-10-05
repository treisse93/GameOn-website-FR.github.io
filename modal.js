// Création fonction editNav
function editNav() {
  // Création de la variable x
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    //ajoute "responsive" au nom de la classe
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
console.log(modalbg);
const modalBtn = document.querySelectorAll(".modal-btn");
console.log(modalBtn);
const modalBody = document.querySelector(".modal-body");
let formData = document.querySelectorAll(".formData");
console.log(formData);
const form = document.querySelector("#reserve");

// déclare variable nom
let tagLast = document.getElementById("last");
console.log(tagLast);
// renvoie  valeur variable nom
const last = tagLast.value;
// déclare variable prénom
let tagFirst = document.getElementById("first");
console.log(tagFirst);
// renvoie  valeur variable prénom
const first = tagFirst.value;
// déclare variable email
let tagEmail = document.getElementById("email");
console.log(tagEmail);
// renvoie  valeur variable email
const email = tagEmail.value;
// déclare variable date de naissance
let tagBirthdate = document.getElementById("birthdate");
console.log(tagBirthdate);
// renvoie valeur variable date de naissance
const birthdate = tagBirthdate.value;
// déclare variable nombre de participation
let tagParticipation = document.getElementById("quantity");
console.log(tagParticipation);
// renvoie valeur variable nombre de participation
const participation = tagParticipation.value;
// déclare variable lieu du tournois
let tagCheckboxLocation = document.querySelectorAll('input[name="location"]');
console.log(tagCheckboxLocation);
// déclare variable message confirmation soumission formulaire
let confirmationMessage = document.querySelector("#confirmation-message");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//launch modal close
const closeModalBtn = document.querySelectorAll(".close");

closeModalBtn.forEach((closeBtn) =>
  closeBtn.addEventListener("click", function () {
    closeModal(false); //empeche la fermeture de la modal au click si formulaire pas validé
  })
);

//Sélectionne le bouton fermer après la validation du form
let closeButton = document.querySelector(".close-button");

// Retire le bouton fermer du formulaire
closeButton.remove();

//Fermer la modale et la vider
function closeModal(reset) {
  modalbg.style.display = "none";
  modalBody.innerHTML = ""; //On vide le modal body
  if (reset) {
    // le formulaire ne se vide que s'il est valide
    form.reset();
  }

  modalBody.appendChild(form); //On ajoute le formulaire au sein de la modal
  modalBody.style.marginTop = "0";
}
// launch modal form close
function launchModalHidden() {
  modalbg.style.display = "none";
}


// déclare fonction prénom
function checkFirst(first) {
  let firstRegExp = new RegExp("(\\D+){2,}");
  if (first === "") {
    showErrorMessageFirst(`Le champ Prénom est vide`); // message erreur si fonction vide
    tagFirst.classList.add("Redborder")// insère une bordure rouge autour de la case
    return false;
  }

  if (!firstRegExp.test(first)) {
    showErrorMessageFirst(`Veuillez insérer minimum 2 caractères alphabétique`);// message erreur si nombre/type de caractères erronnés
    tagFirst.classList.add("Redborder")// insère une bordure rouge autour de la case
    return false;
  }
  showErrorMessageFirst("");// n'insère pas de message d'erreur
  tagFirst.classList.remove("Redborder")// enlève la bordure rouge autour de la case
  return true;
}

// affiche message d'erreur champ prénom
function showErrorMessageFirst(messageFirst) {
  let spanErrorMessageFirst = document.getElementById("errorMessageFirst");// déclare le message d'erreur
  if (!spanErrorMessageFirst) {
    // création message d'erreur dans le champ
    let popupFirst = document.querySelector(".formData__Prenom");//déclare l'endroit où afficher le message
    spanErrorMessageFirst = document.createElement("span");//crée un élément span à l'endroit choisi
    spanErrorMessageFirst.id = "errorMessageFirst";//on rattache le span au message d'erreur
    popupFirst.append(spanErrorMessageFirst);//On rattache le span à l'endroit où l'afficher
  }
  spanErrorMessageFirst.innerText = messageFirst;//insère le message d'erreur dans le span
}

// déclare fonction nom
function checkLast(last) {
  let lastRegExp = new RegExp("(\\D+){2,}");
  if (last === "") {
    showErrorMessageLast(`Le champ nom est vide`);// message erreur si fonction vide
    tagLast.classList.add("Redborder")// insère une bordure rouge autour de la case
    return false;
  }
  if (!lastRegExp.test(last)) {
    showErrorMessageLast(`Veuillez insérer minimum 2 caractères alphabétique`);
    tagLast.classList.add("Redborder")// insère une bordure rouge autour de la case
    return false;
  }
  showErrorMessageLast("");
  tagLast.classList.remove("Redborder")// enlève la bordure rouge autour de la case
  return true;
}

// déclare message erreur nom
function showErrorMessageLast(messageLast) {
  let spanErrorMessageLast = document.getElementById("errorMessageLast");// déclare le message d'erreur
  if (!spanErrorMessageLast) {// création message d'erreur dans le champ
    let popupLast = document.querySelector(".formData__Nom");//déclare l'endroit où afficher le message
    spanErrorMessageLast = document.createElement("span");//crée un élément span à l'endroit choisi
    spanErrorMessageLast.id = "errorMessageLast";//on rattache le span au message d'erreur
    popupLast.append(spanErrorMessageLast);//On rattache le span à l'endroit où l'afficher
  }
  spanErrorMessageLast.innerText = messageLast;//insère le message d'erreur dans le span
}

// déclare fonction email
function checkEmail(email) {
  let emailRegExp = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]{2,6}$");
  if (email === "") {
    showErrorMessageEmail(`Le champ email est vide`);// message erreur si fonction vide
    tagEmail.classList.add("Redborder")// insère une bordure rouge autour de la case
    return false;
  }
  if (!emailRegExp.test(email)) {
    showErrorMessageEmail(`L'adresse email n'est pas valide`);
    tagEmail.classList.add("Redborder")// insère une bordure rouge autour de la case
    return false;
  }
  showErrorMessageEmail("");
  tagEmail.classList.remove("Redborder")// enlève la bordure rouge autour de la case
  return true;
}

// déclare message erreur email
function showErrorMessageEmail(messageEmail) {
  let spanErrorMessageEmail = document.getElementById("errorMessageEmail");// déclare le message d'erreur
  if (!spanErrorMessageEmail) {// création message d'erreur dans le champ
    let popupEmail = document.querySelector(".formData__Email");//déclare l'endroit où afficher le message
    spanErrorMessageEmail = document.createElement("span");//crée un élément span à l'endroit choisi
    spanErrorMessageEmail.id = "errorMessageEmail";//on rattache le span au message d'erreur
    popupEmail.append(spanErrorMessageEmail);//On rattache le span à l'endroit où l'afficher
  }
  spanErrorMessageEmail.innerText = messageEmail;//insère le message d'erreur dans le span
}

function checkBirthdate(birthdate) {
  let birthdateRegExp = new RegExp(
    "^(19|20)\\d{2}(-)(0[1-9]|1[1,2])(-)(0[1-9]|[12][0-9]|3[01])$"
  );

  if (birthdate === "") {
    showErrorMessageBirthdate(`Le champ date de naissance est vide`);// message erreur si fonction vide
    tagBirthdate.classList.add("Redborder")// insère une bordure rouge autour de la case
    return false;
  }
  if (!birthdateRegExp.test(birthdate)) {
    showErrorMessageBirthdate(`Veuillez insérer une date au format dd/MM/AAAA`);// message erreur si format incorrect
    tagBirthdate.classList.add("Redborder")// insère une bordure rouge autour de la case
    return false;
  }
  showErrorMessageBirthdate("");
  tagBirthdate.classList.remove("Redborder")// enlève la bordure rouge autour de la case
  return true;
}

function showErrorMessageBirthdate(messageBirthdate) {
  let spanErrorMessageBirthdate = document.getElementById(
    "errorMessageBirthdate"
  );// déclare le message d'erreur
  if (!spanErrorMessageBirthdate) {// création message d'erreur dans le champ
    let popupBirthdate = document.querySelector(".formData__Birthdate");//déclare l'endroit où afficher le message
    spanErrorMessageBirthdate = document.createElement("span");//crée un élément span à l'endroit choisi
    spanErrorMessageBirthdate.id = "errorMessageBirthdate";//on rattache le span au message d'erreur
    popupBirthdate.append(spanErrorMessageBirthdate);//On rattache le span à l'endroit où l'afficher
  }
  spanErrorMessageBirthdate.innerText = messageBirthdate;//insère le message d'erreur dans le span
}

function checkParticipation(participation) {
  let participationRegExp = new RegExp("([0-9]){1,}");
  if (participation === "") {
    showErrorMessageParticipation(`Le champ participation est vide`);// message erreur si fonction vide
    tagParticipation.classList.add("Redborder")// insère une bordure rouge autour de la case
    return false;
  }
  if (!participationRegExp.test(participation)) {
    showErrorMessageParticipation(`Veuillez insérer un caractère numérique`);// message d'erreur si format incorrect
    tagParticipation.classList.add("Redborder")// insère une bordure rouge autour de la case
    return false;
  }
  showErrorMessageParticipation("");
  tagParticipation.classList.remove("Redborder")// enlève la bordure rouge autour de la case
  return true;
}

function showErrorMessageParticipation(messageParticipation) {
  let spanErrorMessageParticipation = document.getElementById(
    "errorMessageParticipation"
  );// déclare le message d'erreur
  if (!spanErrorMessageParticipation) {// création message d'erreur dans le champ
    let popupParticipation = document.querySelector(".formData__Participation");//déclare l'endroit où afficher le message
    spanErrorMessageParticipation = document.createElement("span");//crée un élément span à l'endroit choisi
    spanErrorMessageParticipation.id = "errorMessageParticipation";//on rattache le span au message d'erreur
    popupParticipation.append(spanErrorMessageParticipation);//On rattache le span à l'endroit où l'afficher
  }

  spanErrorMessageParticipation.innerText = messageParticipation;//insère le message d'erreur dans le span
}




function showErrorMessageCheckboxLocation(messageCheckboxLocation) {
  let spanErrorMessageCheckboxLocation = document.getElementById(
    "errorMessageCheckboxLocation"
  );// déclare le message d'erreur
  if (!spanErrorMessageCheckboxLocation) {
    let popupCheckboxLocation = document.querySelector(".formData__Location");//déclare l'endroit où afficher le message
    spanErrorMessageCheckboxLocation = document.createElement("span");//crée un élément span à l'endroit choisi
    spanErrorMessageCheckboxLocation.id = "errorMessageCheckboxLocation";//on rattache le span au message d'erreur
    popupCheckboxLocation.append(spanErrorMessageCheckboxLocation);//On rattache le span à l'endroit où l'afficher
  }
  spanErrorMessageCheckboxLocation.innerText = messageCheckboxLocation;//insère le message d'erreur dans le span
}

let tagSelect = "";//la variable est vide
console.log(tagSelect);
let tagCheckboxLocationChecked = false;//la case n'est pas cochée
console.log(tagCheckboxLocationChecked);
for (let index = 0; index < tagCheckboxLocation.length; index++) {
  tagCheckboxLocation[index].addEventListener("change", (event) => {
    console.log(event.target.value);//si l'élément change, renvoie sa nouvelle valeur
    tagSelect = event.target.value; // tagSelect renvoie la valeur cochée
    console.log(tagSelect);
    tagCheckboxLocationChecked = true; // si tagSelect coché alors la fonction est correcte
    console.log(tagCheckboxLocationChecked);
  });
}
function checkCheckboxLocation(tagSelect) {
  if (tagCheckboxLocationChecked  === false) {
    showErrorMessageCheckboxLocation(`Veuillez cocher une case`);// message erreur si case non cochée
    return false;
  } else {
    showErrorMessageCheckboxLocation("");
    return true;
  }
}

let tagAccept = document.getElementById("checkbox1"); //on déclare la variable
let accept = "";//on déclare la variable vide
let checkbox1 = tagAccept.checked; //la case est cochée
let checkboxNo = !tagAccept.checked; // la case n'est pas cochée
console.log(checkboxNo); // affiche true ou false
console.log(checkbox1); // affiche true ou false
tagAccept.addEventListener("change", (event) => {
  console.log(event.target.value); //si l'élément change, renvoie sa nouvelle valeur
  accept = event.target.value; // accept prend la valeur de l'élement
  if ((checkbox1 = tagAccept.checked)) {
    checkbox1 = true; // la case est cochée
    checkboxNo = false; // la case est cochée
    console.log(checkboxNo);
    console.log(checkbox1);
    return true;
  }
  checkbox1 = false;// la case n'est pas cochée
  checkboxNo = true;// la case n'est pas cochée
  console.log(checkboxNo); 
  console.log(checkbox1); 
  return false
});

function checkCheckboxCondition(checkbox1) {
  console.log('checkbox :', checkbox1)
  if (checkbox1 === false) {
    showErrorMessageCheckboxCondition(`Veuillez cocher une case`);// si la case est vide renvoie le message d'erreur
    return false;
  } else {
    showErrorMessageCheckboxCondition("");
    return true;
  }
}

function showErrorMessageCheckboxCondition(messageCheckboxCondition) {
  let spanErrorMessageCheckboxCondition = document.getElementById(
    "errorMessageCheckboxCondition" // déclare le message d'erreur
  );// déclare le message d'erreur
  if (!spanErrorMessageCheckboxCondition) {// création message d'erreur dans le champ
    let popupCheckboxCondition = document.querySelector(".checkbox2-label");//déclare l'endroit où afficher le message
    spanErrorMessageCheckboxCondition = document.createElement("span");//crée un élément span à l'endroit choisi
    spanErrorMessageCheckboxCondition.id = "errorMessageCheckboxCondition";//on rattache le span au message d'erreur
    popupCheckboxCondition.append(spanErrorMessageCheckboxCondition);//On rattache le span à l'endroit où l'afficher
  }
  spanErrorMessageCheckboxCondition.innerText = messageCheckboxCondition;
}

//affiche ce qui est contenu dans cases a cocher
let tagNews = document.getElementById("checkbox2");//on déclare la variable
let news = "";//on déclare la variable vide
let checkbox2 = tagNews.checked; // la case est cochée
let checkbox2No = !tagNews.checked; // la case n'est pas cochée
console.log(checkbox2No); // affiche true ou false
console.log(checkbox2); // affiche true ou false
tagNews.addEventListener("change", (event) => {//si l'élément change, renvoie sa nouvelle valeur
  news = event.target.value;// news prend la valeur de l'élement
  if ((checkbox2 = tagNews.checked)) {
    checkbox2 = true; // la case est cochée
    checkbox2No = false; // la case est cochée
    console.log(checkbox2No);
    console.log(checkbox2);
    return true;
  }
  checkbox2 = false;// la case n'est pas cochée
  checkbox2No = true;// la case n'est pas cochée
  console.log(checkbox2No);
  console.log(checkbox2);
  return false
});


//recuperer form pas btn pour mettre submit
let btnSubmit = document.querySelector(".btn-submit");//on décalre la variable
console.log(btnSubmit);
btnSubmit.addEventListener("click", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const birthdate = document.getElementById("birthdate").value;
  const participation = document.getElementById("quantity").value;
  const tagSelect = document.querySelectorAll('input[name="location"]').value;
  const checkbox1 = document.getElementById("checkbox1").checked;
  if (//on vérifie si les conditions sont respectés
    checkFirst(first) &
    checkLast(last) &
    checkEmail(email) &
    checkBirthdate(birthdate) &
    checkParticipation(participation) &
    checkCheckboxLocation(tagSelect) &
    checkCheckboxCondition(checkbox1)
  ) {
    modalBody.innerHTML = ""; //on vide la modal
    modalBody.style.marginTop = "200px";//on décale la modal de 200px vers le bas en partant de la bordure haute
    modalBody.appendChild(confirmationMessage);//On rattache le message à l'endroit où l'afficher
    confirmationMessage.innerText = "Merci pour votre inscription!";//on ajoute le contenu du message
    modalBody.appendChild(closeButton); //Création du btn fermer
    
  }

  closeButton.addEventListener("click", function () {
    closeModal(true);// closeModal = true, vide le formulaire
  });
  closeButton.style.marginTop = "200px";
  return true;
});

// affiche ce qui est contenu dans la tag first
tagFirst.addEventListener("change", () => {//si l'élement change
  console.log(tagFirst.value);
  checkFirst(tagFirst);//affiche la nouvelle valeur
});
// affiche ce qui est contenu dans la tag last

console.log(last);
tagLast.addEventListener("change", () => {//si l'élement change
  console.log(tagLast.value);
  checkLast(tagLast);//affiche la nouvelle valeur
});

console.log(email);
tagEmail.addEventListener("change", () => {//si l'élement change
  console.log(tagEmail.value);
  checkLast(tagEmail);//affiche la nouvelle valeur
});

console.log(birthdate);
tagBirthdate.addEventListener("change", () => {//si l'élement change
  console.log(tagBirthdate.value);
  checkLast(tagBirthdate);//affiche la nouvelle valeur
});

console.log(participation);
tagParticipation.addEventListener("change", () => {//si l'élement change
  console.log(tagParticipation.value);
  checkLast(tagParticipation);//affiche la nouvelle valeur
});
