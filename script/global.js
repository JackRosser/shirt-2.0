//VARIABILI PRINCIPALI CHE DEVONO CAMBIARE
let shirtColor = document.querySelector(".main_shirt");
shirtColor.style.backgroundColor = "white";

//  MAGLIETTA COMPLETA
let shirtComplete = {
  // color: shirtColor.style.backgroundColor
  // text: [text, font, fontColor, fontAlign, fontStyle],
  // image: [file, opacity, borders, dimension, up, left, down, right]
};

//  Sezioni del menu

let ul = document.querySelector("ul");
let li = document.querySelector("li");

let colorButton = document.querySelector(".li__color");
colorButton.classList.add("li-on-mobile-js");
let textButton = document.querySelector(".li__font");
textButton.classList.add("li-on-mobile-js");
let imageButton = document.querySelector(".li__image");
imageButton.classList.add("li-on-mobile-js");

// con i pulsanti si torna alla dimensione originale

let exist = function (id, button) {
  button.addEventListener("click", function () {
    if (!document.getElementById(id)) {
      // Aggiunge gli eventi mouseover e mouseout solo se il form non esiste
      button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "gray";
        // button.style.height = "8%";
      });

      button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "rgb(55, 55, 55)";
        // button.style.height = "5%";
      });
    }
  });
};

exist("shirt__color", colorButton);
exist("shirt__text", textButton);
exist("shirt__image", imageButton);

//🔴 QUI INIZIA LA PARTE RELATIVA AL COLORE 🔴
// Funzione per aprire il sottomenu di colorButton __________________________________________________________________
colorButton.addEventListener("click", function () {
  let existingForm = document.querySelector("#shirt__color");
  if (existingForm) {
    existingForm.remove();
    textButton.style.display = "";
    imageButton.style.display = "";
    printButton.style.display = "";
    return; // Esce dalla funzione se il form viene rimosso
  }

  let form = document.createElement("form");
  form.id = "shirt__color";
  form.className = "panel";

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
  form.append(inputTypeColor, div);
  ul.insertBefore(form, colorButton.nextElementSibling); // metto il form dentro ul subito dopo il li scelto

  // cambio colore della maglietta

  inputTypeColor.addEventListener("input", function () {
    let mainShirtColor = document.querySelector(".main_shirt");
    mainShirtColor.style.backgroundColor = inputTypeColor.value;
  });

  //RESET
  reset.addEventListener("click", function (e) {
    e.preventDefault(); // Previene il reset del form, se necessario
    let mainShirtColor = document.querySelector(".main_shirt");
    mainShirtColor.style.backgroundColor = "white"; // Resetta il colore della maglietta
    inputTypeColor.value = "#ffffff"; // Resetta il valore del colore
  });
  //GESTIONE SUBMIT
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    shirtComplete.color = inputTypeColor.value;
    form.remove();
    textButton.style.display = "";
    imageButton.style.display = "";
    printButton.style.display = "";
  });

  // Gestione hover per colorButton
  if (form) {
    colorButton.addEventListener("mouseover", function () {
      colorButton.style.backgroundColor = "gray"; // Colore di sfondo al passaggio del mouse
      colorButton.style.height = "5%";
    });

    colorButton.addEventListener("mouseout", function () {
      colorButton.style.backgroundColor = "rgb(55, 55, 55)"; // Colore di sfondo al di fuori del mouse
      colorButton.style.height = "5%";
    });

    // altri pulsanti nascosti
    textButton.style.display = "none";
    imageButton.style.display = "none";
    printButton.style.display = "none";
  }
});

//🔴 QUI INIZIA LA PARTE RELATIVA AL TESTO 🔴
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

  // Gestione hover per colorButton
  if (form) {
    textButton.addEventListener("mouseover", function () {
      textButton.style.backgroundColor = "gray"; // Colore di sfondo al passaggio del mouse
      textButton.style.height = "5%";
    });

    textButton.addEventListener("mouseout", function () {
      textButton.style.backgroundColor = "rgb(55, 55, 55)"; // Colore di sfondo al di fuori del mouse
      textButton.style.height = "5%";
    });

    // altri pulsanti nascosti
    colorButton.style.display = "none";
    imageButton.style.display = "none";
    printButton.style.display = "none";
  }
});

//🔴 QUI INIZIA LA PARTE RELATIVA AL'IMMAGINE 🔴
// vado a cercare se esiste il mio elemento, e nel caso lo rimuovo
imageButton.addEventListener("click", function () {
  let existingForm = document.querySelector("#shirt__image");
  if (existingForm) {
    existingForm.remove();
    colorButton.style.display = "";
    textButton.style.display = "";
    printButton.style.display = "";
    return; // Esce dalla funzione se il form viene rimosso
  }

  let form = document.createElement("form");
  form.id = "shirt__image";
  form.className = "panel";
  //______________ QUI INIZIA IL CORPO DEL FORM
  let pFile = document.createElement("p");
  pFile.innerText = "Carica la foto che preferisci";

  // creazione file
  let file = document.createElement("input");
  file.type = "file";
  file.name = "input-file";
  file.id = "input__file";

  // creazione range opacity
  let pOpacity = document.createElement("p");
  pOpacity.innerText = "Regola l'opacità dell'immagine";
  let rangeOpacity = document.createElement("input");
  rangeOpacity.type = "range";
  rangeOpacity.name = "opacity";
  rangeOpacity.id = "opacity";
  rangeOpacity.min = "0";
  rangeOpacity.max = "1";
  rangeOpacity.step = "0.01";
  rangeOpacity.value = "1";

  // creazione range border radius
  let pRadius = document.createElement("p");
  pRadius.innerText = "Arrotonda i bordi";
  let rangeRadius = document.createElement("input");
  rangeRadius.type = "range";
  rangeRadius.name = "borders";
  rangeRadius.id = "borders";
  rangeRadius.min = "0";
  rangeRadius.max = "100";
  rangeRadius.step = "1";
  rangeRadius.value = "0";

  // creazione range dimension
  let pDimension = document.createElement("p");
  pDimension.innerText = "Cambia la dimensione";
  let rangeDimension = document.createElement("input");
  rangeDimension.type = "range";
  rangeDimension.name = "dimension";
  rangeDimension.id = "dimension";
  rangeDimension.min = "0";
  rangeDimension.max = "100";
  rangeDimension.step = "1";
  rangeDimension.value = "100";

  // creazione joypad
  let pPosition = document.createElement("p");
  pPosition.innerText = "Posiziona l'immagine lungo la maglietta";
  let joypad = document.createElement("div");
  joypad.className = "joypad";
  let up = document.createElement("button");
  up.id = "up";
  up.className = "button";
  up.innerHTML = `<i class="fas fa-arrow-alt-circle-up"></i>`;
  let right = document.createElement("button");
  right.id = "right";
  right.className = "button";
  right.innerHTML = `<i class="fas fa-arrow-alt-circle-right"></i>`;
  let left = document.createElement("button");
  left.id = "left";
  left.className = "button";
  left.innerHTML = `<i class="fas fa-arrow-alt-circle-left">`;
  let down = document.createElement("button");
  down.id = "down";
  down.className = "button";
  down.innerHTML = `<i class="fas fa-arrow-alt-circle-down"></i>`;

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
  joypad.append(up, left, down, right);
  form.append(pFile, file, pOpacity, rangeOpacity, pRadius, rangeRadius, pDimension, rangeDimension, pPosition, joypad, div); //appendo nel FORM
  ul.insertBefore(form, imageButton.nextElementSibling); // metto il form dentro ul subito dopo il li scelto

  // Gestione hover per colorButton
  if (form) {
    imageButton.addEventListener("mouseover", function () {
      imageButton.style.backgroundColor = "gray"; // Colore di sfondo al passaggio del mouse
      imageButton.style.height = "5%";
    });

    imageButton.addEventListener("mouseout", function () {
      imageButton.style.backgroundColor = "rgb(55, 55, 55)"; // Colore di sfondo al di fuori del mouse
      imageButton.style.height = "5%";
    });

    // altri pulsanti nascosti
    textButton.style.display = "none";
    colorButton.style.display = "none";
    printButton.style.display = "none";
  }
});

// PULSANTE VERDE

let printButton = document.querySelector(".li__print");
printButton.classList.add("li-on-mobile-js");
printButton.addEventListener("click", function () {
  console.log(shirtComplete);
});
