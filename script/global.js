//VARIABILI PRINCIPALI CHE DEVONO CAMBIARE
let shirtColor = document.querySelector(".main_shirt");
shirtColor.style.backgroundColor = "white";
let text = "";
let font = "";
let fontColor = "black";
let fontAlign = "";
let fontStyle = "";
let fontWeight = "";

//image
let file = "";
let opacity = "";
let borders = "";
let dimension = "";
let up = "";
let left = "";
let down = "";
let right = "";
let zIndex = 4;
//  MAGLIETTA COMPLETA
let shirtComplete = {
  color: "white",
  text: [text, font, fontColor, fontAlign, fontStyle, fontWeight],
  image: [file, opacity, borders, dimension, up, left, down, right, zIndex]
};

//  Sezioni del menu

let ul = document.querySelector("ul");
let li = document.querySelector("li");
let body = document.querySelector("body");

let colorButton = document.querySelector(".li__color");
colorButton.classList.add("li-on-mobile-js");
let textButton = document.querySelector(".li__font");
textButton.classList.add("li-on-mobile-js");
let imageButton = document.querySelector(".li__image");
imageButton.classList.add("li-on-mobile-js");

// ZONA IN cuI cOMPAIONO LE MODIFICHE ALLA MAGLIETTA
let zoneModify = document.getElementById("insert-here");

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
  let bold = document.createElement("div");
  bold.innerHTML = `<i class="fas fa-bold"></i>`;
  bold.className = "text_modify_button";

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
  divIcons.append(font, tint, align, style, bold);
  form.append(label, textArea, divIcons, div); //appendo nel FORM
  ul.insertBefore(form, textButton.nextElementSibling); // metto il form dentro ul subito dopo il li scelto

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    shirtComplete.text[0] = zoneModify.innerText;
    form.remove();
    colorButton.style.display = "";
    imageButton.style.display = "";
    printButton.style.display = "";
  });

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

  textArea.addEventListener("input", function () {
    zoneModify.textContent = textArea.value;
  });

  font.addEventListener("click", function () {
    let section = document.createElement("section");
    let label = document.createElement("label");
    label.htmlFor = "fontSelection";
    label.innerText = "Scegli il font";
    let select = document.createElement("select");
    select.id = "fontSelection";
    select.name = "Selezione font";
    let roboto = document.createElement("option");
    roboto.value = "Roboto";
    roboto.innerText = "Roboto (default)";
    let rockSalt = document.createElement("option");
    rockSalt.value = "Rock Salt";
    rockSalt.innerText = "Rock Salt";
    let comicNeue = document.createElement("option");
    comicNeue.value = "Comic Neue";
    comicNeue.innerText = "Comic Neue";
    let chewy = document.createElement("option");
    chewy.value = "Chewy";
    chewy.innerText = "Chewy";
    let bangers = document.createElement("option");
    bangers.value = "Bangers";
    bangers.innerText = "Bangers";

    let div = document.createElement("div");

    select.addEventListener("change", function () {
      zoneModify.style.fontFamily = select.value;
    });

    let submitFont = document.createElement("button");
    submitFont.className = "button";
    submitFont.innerText = "Conferma";

    div.append(submitFont);
    select.append(roboto, rockSalt, comicNeue, chewy, bangers);
    section.append(label, select, div);
    body.appendChild(section);

    submitFont.addEventListener("click", function () {
      section.remove();
      if (select.value === "Roboto") {
        shirtComplete.text[1] = "Roboto";
      }
      if (select.value === "Rock Salt") {
        shirtComplete.text[1] = "Rock Salt";
      }
      if (select.value === "Comic Neue") {
        shirtComplete.text[1] = "Comic Neue";
      }
      if (select.value === "Chewy") {
        shirtComplete.text[1] = "Chewy";
      }
      if (select.value === "Bangers") {
        shirtComplete.text[1] = "Bangers";
      }
    });
  });
  tint.addEventListener("click", function () {
    let section = document.createElement("section");
    let colorSection = document.createElement("input");
    colorSection.type = "color";
    colorSection.className = "input__color_panel ";
    let div = document.createElement("div");
    let submitColorPanel = document.createElement("button");
    submitColorPanel.className = "button";
    submitColorPanel.innerText = "Conferma";
    div.appendChild(submitColorPanel);
    section.append(colorSection, div);
    body.appendChild(section);
    colorSection.addEventListener("input", function () {
      zoneModify.style.color = colorSection.value;
    });

    submitColorPanel.addEventListener("click", function () {
      section.remove();
      shirtComplete.text[2] = zoneModify.style.color;
    });
  });

  align.addEventListener("click", function () {
    let section = document.createElement("section");
    let divContainer = document.createElement("div");
    divContainer.className = "divcontainer";
    let left = document.createElement("div");
    left.innerHTML = `<i class="fas fa-align-left"></i>`;
    left.className = "align_class";
    let center = document.createElement("div");
    center.innerHTML = `<i class="fas fa-align-center"></i>`;
    center.className = "align_class";
    let right = document.createElement("div");
    right.innerHTML = `<i class="fas fa-align-right"></i>`;
    right.className = "align_class";
    let submitAlign = document.createElement("button");
    submitAlign.className = "button";
    submitAlign.innerText = "Conferma";
    divContainer.append(left, center, right);
    section.append(divContainer, submitAlign);
    body.appendChild(section);
    left.addEventListener("click", function () {
      zoneModify.style.textAlign = "left";
    });
    center.addEventListener("click", function () {
      zoneModify.style.textAlign = "center";
    });
    right.addEventListener("click", function () {
      zoneModify.style.textAlign = "right";
    });
    submitAlign.addEventListener("click", function () {
      shirtComplete.text[3] = zoneModify.style.textAlign;
      section.remove();
    });
  });
  style.addEventListener("click", function () {
    let section = document.createElement("section");
    let divContainer = document.createElement("div");
    divContainer.className = "divcontainer";
    let none = document.createElement("div");
    none.className = "align_class";
    none.innerHTML = `<i class="fas fa-remove-format"></i>`;
    let underScore = document.createElement("div");
    underScore.innerHTML = `<i class="fas fa-underline"></i>`;
    underScore.className = "align_class";
    let barrato = document.createElement("div");
    barrato.innerHTML = `<i class="far fa-minus-square"></i>`;
    barrato.className = "align_class";
    let submitStyle = document.createElement("button");
    submitStyle.className = "button";
    submitStyle.innerText = "Conferma";
    divContainer.append(none, underScore, barrato);
    section.append(divContainer, submitStyle);
    body.appendChild(section);
    none.addEventListener("click", function () {
      zoneModify.style.textDecoration = "none";
    });
    underScore.addEventListener("click", function () {
      zoneModify.style.textDecoration = "underline";
    });
    barrato.addEventListener("click", function () {
      zoneModify.style.textDecoration = "line-through";
    });
    submitStyle.addEventListener("click", function () {
      shirtComplete.text[4] = zoneModify.style.textDecoration;
      section.remove();
    });
  });

  bold.addEventListener("click", function () {
    let section = document.createElement("section");
    let divContainer = document.createElement("div");
    divContainer.className = "divcontainer";
    let normal = document.createElement("div");
    normal.innerHTML = `<i class="fas fa-font"></i>`;
    let bold = document.createElement("div");
    bold.innerHTML = `<i class="fas fa-bold"></i>`;
    let cursive = document.createElement("div");
    cursive.innerHTML = `<i class="fas fa-italic"></i>`;
    let submitBold = document.createElement("button");
    submitBold.className = "button";
    submitBold.innerText = "Conferma";
    divContainer.append(normal, bold, cursive);
    section.append(divContainer, submitBold);
    body.append(section);

    bold.addEventListener("click", function () {
      zoneModify.style.fontWeight = "bold";
    });
    normal.addEventListener("click", function () {
      zoneModify.style.fontStyle = "normal";
      zoneModify.style.fontWeight = "normal";
    });
    cursive.addEventListener("click", function () {
      zoneModify.style.fontStyle = "oblique";
    });
    submitBold.addEventListener("click", function () {
      if (zoneModify.style.fontWeight === "bold" && zoneModify.style.fontStyle === "oblique") {
        shirtComplete.text[5] = "bold, oblique";
      } else if (zoneModify.style.fontWeight === "bold") {
        shirtComplete.text[5] = "bold";
      } else if (zoneModify.style.fontStyle === "oblique") {
        shirtComplete.text[5] = "oblique";
      } else {
        shirtComplete.text[5] = "normal";
      }
      section.remove();
    });
  });
  // qui finisce la parentesi del text button
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

  let divSS = document.createElement("div");
  divSS.className = "divcontainer";
  let sopra = document.createElement("div");
  sopra.innerText = "Sposta sopra";
  sopra.className = "sposta";
  let sotto = document.createElement("div");
  sotto.innerText = "Sposta sotto";
  sotto.className = "sposta";
  divSS.append(sopra, sotto);
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
  form.append(pFile, file, pOpacity, rangeOpacity, pRadius, rangeRadius, pDimension, rangeDimension, pPosition, joypad, divSS, div); //appendo nel FORM
  ul.insertBefore(form, imageButton.nextElementSibling); // metto il form dentro ul subito dopo il li scelto

  // aggiungo l'immagine con l'input

  file.addEventListener("change", function (event) {
    let imagePosition = document.querySelector("#image_position");

    // Verifica se c'è un file selezionato
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      let reader = new FileReader();

      // Quando il file è stato letto completamente
      reader.onload = function (e) {
        // Crea o sostituisce l'elemento immagine
        let img = document.querySelector(".uploaded-image");
        if (!img) {
          img = document.createElement("img");
          img.className = "uploaded-image";
          imagePosition.appendChild(img);
        }
        img.src = e.target.result;

        // Applica le modifiche all'immagine
        img.style.opacity = rangeOpacity.value;
        img.style.borderRadius = `${rangeRadius.value}%`;
        img.style.width = `${rangeDimension.value}%`;

        // il testo deve stare sopra l'immagine
        let textElement = document.querySelector("#insert-here");
        textElement.style.zIndex = 5;
        img.style.zIndex = 4;

        // opacità
        rangeOpacity.addEventListener("input", function () {
          img.style.opacity = rangeOpacity.value;
        });

        // border radius
        rangeRadius.addEventListener("input", function () {
          img.style.borderRadius = `${rangeRadius.value}%`;
        });

        // dimensione
        rangeDimension.addEventListener("input", function () {
          img.style.width = `${rangeDimension.value}%`;
        });
        let posX = 0;
        let posY = 0;

        // Gestione movimento su
        up.addEventListener("click", function (event) {
          event.preventDefault();
          posY -= 10; // Sposta l'immagine verso l'alto di 10px
          img.style.top = `${posY}px`;
        });

        // Gestione movimento giù
        down.addEventListener("click", function (event) {
          event.preventDefault();
          posY += 10; // Sposta l'immagine verso il basso di 10px
          img.style.top = `${posY}px`;
        });

        // Gestione movimento sinistra
        left.addEventListener("click", function (event) {
          event.preventDefault();
          posX -= 10; // Sposta l'immagine verso sinistra di 10px
          img.style.left = `${posX}px`;
        });

        // Gestione movimento destra
        right.addEventListener("click", function (event) {
          event.preventDefault();
          posX += 10; // Sposta l'immagine verso destra di 10px
          img.style.left = `${posX}px`;
        });
      };

      sopra.addEventListener("click", function () {
        img.style.zIndex = 6;
      });

      sotto.addEventListener("click", function () {
        img.style.zIndex = 4;
      });

      // Leggi il file come un URL di dati
      reader.readAsDataURL(file);
      // Gestione submit
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Verifica se img è definito
        let imgElement = document.querySelector(".uploaded-image");

        if (imgElement) {
          shirtComplete.image[0] = event.target.files[0].name;
          shirtComplete.image[1] = rangeOpacity.value;
          shirtComplete.image[2] = rangeRadius.value;
          shirtComplete.image[3] = rangeDimension.value;
          shirtComplete.image[4] = imgElement.style.top;
          shirtComplete.image[5] = imgElement.style.left;
          shirtComplete.image[6] = imgElement.style.zIndex;
        } else {
          console.error("Immagine non trovata o non definita");
        }

        // Rimuovi il form dal DOM
        form.remove();

        // Ripristina la visualizzazione dei pulsanti
        colorButton.style.display = "";
        textButton.style.display = "";
        printButton.style.display = "";
      });

      // Gestione reset
      reset.addEventListener("click", function (e) {
        e.preventDefault();

        // Resetta i valori dei range
        rangeOpacity.value = "1";
        rangeRadius.value = "0";
        rangeDimension.value = "100";
        posX = 0;
        posY = 0;

        // Rimuove l'immagine caricata e resetta l'input file
        let img = document.querySelector(".uploaded-image");
        if (img) {
          img.remove(); // Rimuove l'immagine dal DOM
        }
        file.value = ""; // Resetta il campo di input file

        // Resetta gli altri stili relativi all'immagine
        if (img) {
          img.style.opacity = rangeOpacity.value;
          img.style.borderRadius = `${rangeRadius.value}%`;
          img.style.width = `${rangeDimension.value}%`;
          img.style.top = `${posY}px`;
          img.style.left = `${posX}px`;
          img.style.zIndex = 4;
        }
      });
      // QUI FINISCE LA ZONA DELL'IF
    }
    // MANTENERSI SOPRA QUESTE PARENTESI
  });

  // 🔴FINE GESTIONE IMMAGINE🔴

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
