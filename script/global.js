// Sezioni del menu

let ul = document.querySelector("ul");
let li = document.querySelector("li");

let colorButton = document.querySelector(".li__color");
let textButton = document.querySelector(".li__font");
let imageButton = document.querySelector(".li__image");
let printButton = document.querySelector(".li__print");

// Funzione per aprire il sottomenu di colorButton
colorButton.addEventListener("click", function () {
  let existingForm = document.querySelector("#shirt__text");
  if (existingForm) {
    existingForm.remove();
    textButton.style.display = "";
    imageButton.style.display = "";
    printButton.style.display = "";
    return; // Esce dalla funzione se il form viene rimosso
  }

  let form = document.createElement("form");
  form.id = "shirt__text";
  form.className = "panel";

  let labelInputTypeColor = document.createElement("label");
  labelInputTypeColor.htmlFor = "input__color";

  let inputTypeColor = document.createElement("input");
  inputTypeColor.id = "input__color";
  inputTypeColor.type = "color";

  let div = document.createElement("div");

  let submit = document.createElement("button");
  submit.type = "submit";
  submit.className = "button";
  submit.innerText = "Conferma";

  let reset = document.createElement("input");
  reset.id = "reset";
  reset.type = "reset";
  reset.className = "button";
  reset.value = "Reset";

  div.append(submit, reset);
  form.append(labelInputTypeColor, inputTypeColor, div);
  ul.insertBefore(form, colorButton.nextElementSibling); // metto il form dentro ul subito dopo il li scelto

  // Gestione hover per colorButton
  colorButton.addEventListener("mouseover", function () {
    colorButton.style.backgroundColor = "white";
  });

  colorButton.addEventListener("mouseout", function () {
    colorButton.style.backgroundColor = "rgb(55, 55, 55)";
  });

  // altri pulsanti nascosti
  textButton.style.display = "none";
  imageButton.style.display = "none";
  printButton.style.display = "none";
});
