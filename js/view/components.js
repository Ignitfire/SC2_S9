import { instructions, thanks } from "../../constants.js";

/**
 * crée une fenetre d'instruction à partir des textes dans constants.js
 * @param {Boolean} beginOrEnd : true si on veut afficher les instructions du debut, false si c'est les remerciements
 * @returns {HTMLElement}
 */
export const instructionWindow = function (beginOrEnd) {
  let div = document.createElement("div");
  div.classList.add("instructions");

  let innerInstructions = document.createElement("p");
  innerInstructions.innerText = beginOrEnd ? instructions : thanks;

  let startButton = document.createElement("button");
  startButton.setAttribute("id", beginOrEnd ? "begin" : "finish");
  startButton.innerText = beginOrEnd ? "j'ai lu et j'accepte de mourir avec le sourir" : "cimer a toi t'es fou wesh";

  div.append(innerInstructions, startButton);

  return div;
};
