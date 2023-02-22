import { Trial } from "./model/Trial.js";

/**
 * en fonction du $trial, donne le mot et la couleur au texte du stimulus
 * crée les event listener sur les boutons de choix de couleur et resolve lorsqu'un clic est effectué
 * @param {Trial} trial
 * @returns { Promise }
 */
export const trialExecution = async function (trial) {
  return new Promise((resolve, reject) => {
    //TODO: on laisse le reject??
    //TODO: rajouter les mouseTracker + du coup les attributs d'instances associés dans Trial.js
    /**
     * mise à jour du stimulus
     */
    let stimulus = document.querySelector("#stimulus");
    stimulus.innerHTML = trial.word;
    stimulus.style.color = trial.textColor;
    trial.startTime = Date.now();

    /**
     * ajout des event listener sur les boutons de choix de couleur
     */
    let colorButtons = [
      document.querySelector("#red"),
      document.querySelector("#blue"),
      document.querySelector("#yellow"),
      document.querySelector("#green"),
    ];

    let controller = new AbortController();
    colorButtons.forEach((colorButton) => {
      colorButton.addEventListener(
        "click",
        (e) => {
          /**
           * instanciation des attributs d'instance de trial et cloture des eventlistener et de la promesse 
           */
          trial.endTime = Date.now();
          trial.selectedColor = e.target.id;
          controller.abort();
          resolve();
        },
        {
          signal: controller.signal,
        }
      );
    });
  });
};
