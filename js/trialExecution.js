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
    let colorButtons = [
      document.querySelector("#red"),
      document.querySelector("#blue"),
      document.querySelector("#yellow"),
      document.querySelector("#green"),
    ];
    let colorButtonsController = new AbortController();
    let mousemoveController = new AbortController();

    /**
     * Activation du bouton start
     //TODO potentiellement attente maximum de 10s pour pas que le systeme enregistre eternellement en cas de bug/d'arret
     */
    let startButton=document.querySelector("#start");
    startButton.addEventListener(
      "click",
      (e) => {
    /**
     * ajout des event listener sur les boutons de choix de couleur
     */
    colorButtons.forEach((colorButton) => {
      colorButton.addEventListener(
        "click",
        (e) => {
          mousemoveController.abort();
          /**
           * instanciation des attributs d'instance de trial et cloture des eventlistener et de la promesse 
           */
          trial.endTime = Date.now();
          trial.selectedColor = e.target.id;
          colorButtonsController.abort();
          resolve();
        },
        {
          signal: colorButtonsController.signal,
        }
      );
    });
    //TODO bouton start disparait 300ms de pause affichage et libération souris

    /**
     * Affichage du stimulus
     */
    let stimulus = document.querySelector("#stimulus");

    stimulus.innerHTML = trial.word;
    stimulus.style.color = trial.textColor;

    /**
     * Lancement des compteurs
     */
    trial.startTime = Date.now();
    addEventLisetener('mousemove',(e) =>{ //TODO Rendre cette fonction synchrone avec elle-même seulement. (new Thread synchrone)
      position=[e.pageX,e.pageY]
      trial.mousePath.push(position)
    },{
      signal: mousemoveController.signal,
    });


      }
    );
    

  });
};
