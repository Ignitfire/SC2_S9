
/**
 * crée une fenetre d'instruction à partir des textes dans constants.js
 * @param {Boolean} beginOrEnd : true si on veut afficher les instructions du debut, false si c'est les remerciements
 * @returns {HTMLElement}
 */
export const instructionWindow = function (message, buttonText, buttonId) {
  let div = document.createElement("div");
  div.classList.add("instructions");

  let innerInstructions = document.createElement("p");
  innerInstructions.innerText = message;

  let startButton = document.createElement("button");
  startButton.setAttribute("id", buttonId);
  startButton.innerText = buttonText;
  div.append(innerInstructions, startButton);

  return div;
};


/**
 * si le paramettre message n'est pas renseigné, le popup affiche une grosse croix rouge
 * @param {String} message 
 */
export const popup = function (message = null) {
  let div = document.createElement("div")
  div.classList.add("popup");

  if (message) {
    let innerInstructions = document.createElement("p");
    innerInstructions.innerText = message;
  } else {
    //TODO : mettre une grosse croix tah jesus le boss
  }
}
