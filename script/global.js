// Sezioni del menu

let ul = document.querySelector("ul");
let li = document.querySelector("li");

let colorButton = document.querySelector(".li__color");
let textButton = document.querySelector(".li__font");
let imageButton = document.querySelector(".li__image");
let printButton = document.querySelector(".li__print");

// Funzione per aprire il sottomenu di colorButton __________________________________________________________________
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
  if (form) {
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
  }
});

// Funzione per aprire il sottomenu di textButton __________________________________________________________________
// vado a cercare se esiste il mio elemento, e nel caso lo rimuovo
textButton.addEventListener("click", function () {
  let existingForm = document.querySelector("#shirt__text");
  if (existingForm) {
    existingForm.remove();
    colorButton.style.display = "";
    imageButton.style.display = "";
    printButton.style.display = "";
    return; // Esce dalla funzione se il form viene rimosso
  }

  let form = document.createElement("form");
  form.id = "shirt__text";
  form.className = "panel";
  //______________ QUI INIZIA IL CORPO DEL FORM
  let label = document.createElement("label");
  label.htmlFor = "input__text";
  let textArea = document.createElement("textarea");
  textArea.id = "input__text";
  textArea.wrap = "hard";
  textArea.placeholder = "Scrivi qui il testo che desideri inserire nella maglietta...";
  let divIcons = document.createElement("div");

  divIcons.id = "icon__content";
  let font = document.createElement("div");
  font.className = "text_modify_button";
  font.id = "font";
  font.innerHTML = `<i class="fas fa-comment-dots"></i>`;
  let tint = document.createElement("div");
  tint.className = "text_modify_button";
  tint.id = "tint";
  tint.innerHTML = `<i class="fas fa-tint"></i>`;
  let align = document.createElement("div");
  align.className = "text_modify_button";
  align.id = "align";
  align.innerHTML = `<i class="fas fa-align-center"></i>`;
  let style = document.createElement("div");
  style.className = "text_modify_button";
  style.id = "style";
  style.innerHTML = `<i class="fas fa-underline"></i>`;

  //________________DA QUI INIZIA IL DIV DEI PULSANTI _______________________
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
  divIcons.append(font, tint, align, style);
  form.append(label, textArea, divIcons, div); //appendo nel FORM
  ul.insertBefore(form, textButton.nextElementSibling); // metto il form dentro ul subito dopo il li scelto

  // Gestione hover per textbutton
  if (form) {
    textButton.addEventListener("mouseover", function () {
      textButton.style.backgroundColor = "white";
    });

    textButton.addEventListener("mouseout", function () {
      textButton.style.backgroundColor = "rgb(55, 55, 55)";
    });
  }
  // altri pulsanti nascosti
  colorButton.style.display = "none";
  imageButton.style.display = "none";
  printButton.style.display = "none";
});
