import { instructionWindow } from "./components.js";


/**
 * ajoute la fenetre d'instructions du debut à la page qui se ferme lorsqu'on clique sur le bouton commencer
 * @returns { Promise }
 */
export const startingInstructions = function () {
  return new Promise((resolve) => {
    let startingInstructionsWindow = instructionWindow(true);

    let body = document.querySelector('body')
    body.append(startingInstructionsWindow)

    let startButton = document.querySelector('button#begin')
    startButton.addEventListener('click', ()=>{
        body.removeChild(startingInstructionsWindow)
        resolve()
    })
  });
};

/**
 * ajoute la fenetre de remerciments à la page qui se ferme lorsqu'on clique sur le bouton terminer
 * TODO peut etre supprimer le bouton et laisser la page comme ca
 * @returns { Promise }
 */
export const endingInstructions = function () {
    return new Promise((resolve) => {
      let startingInstructionsWindow = instructionWindow(false);
  
      let body = document.querySelector('body')
      body.append(startingInstructionsWindow)
  
      let startButton = document.querySelector('button#finish')
      startButton.addEventListener('click', ()=>{
          body.removeChild(startingInstructionsWindow)
          resolve()
      })
    });
  };