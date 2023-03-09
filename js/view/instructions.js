import { instructionWindow, popup } from "./components.js";
import { instructions, moveFasterinstructions, thanks, waitStimuliInstruction } from "../../constants.js";


/**
 * ajoute la fenetre d'instructions du debut à la page qui se ferme lorsqu'on clique sur le bouton commencer
 * @returns { Promise }
 */
export const startingInstructions = function () {
  return new Promise((resolve) => {
    let startingInstructionsWindow = instructionWindow(instructions, "j'ai compris, commencer l'experience", "begin");

    let frame = document.querySelector('#frame')
    frame.append(startingInstructionsWindow)

    let startButton = document.querySelector('button#begin')
    startButton.addEventListener('click', ()=>{
        frame.removeChild(startingInstructionsWindow)
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
      let startingInstructionsWindow = instructionWindow(thanks, "cimer a toi t'es un zinzin", "finish");
  
      let frame = document.querySelector('#frame')
      frame.append(startingInstructionsWindow)
  
      let startButton = document.querySelector('button#finish')
      startButton.addEventListener('click', ()=>{
          frame.removeChild(startingInstructionsWindow)
          resolve()
      })
    });
  };

  export const wrongChoicePopup = function (){
    return new Promise(resolve => {
      let errorPopup = popup("X", "wrongChoice")
      let body = document.querySelector('body')
      errorPopup.style.backgroundColor="transparent"
      body.append(errorPopup)
      setTimeout(() => {
        body.removeChild(errorPopup)
        resolve()
      }, 2000);
    })
  }


  export const moveFasterPopup = function (){
    return new Promise(resolve => {
      let fasterPopup = popup(moveFasterinstructions, 'moveFaster')
      let body = document.querySelector('body')
      body.append(fasterPopup)
      setTimeout(() => {
        body.removeChild(fasterPopup)
        resolve()
      }, 2000);
    })
  }


  export const waitStimuliPopup = function (){
    return new Promise(resolve => {
      let waitPopup = popup(waitStimuliInstruction, 'waitStimuli')
      let body = document.querySelector('body')
      body.append(waitPopup)
      setTimeout(() => {
        body.removeChild(waitPopup)
        resolve()
      }, 2000);
    })
  }