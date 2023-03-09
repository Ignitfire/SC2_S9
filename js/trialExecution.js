import { Trial } from "./model/Trial.js";
import { moveFasterPopup, wrongChoicePopup, waitStimuliPopup } from "./view/instructions.js";
/**
 * en fonction du $trial, donne le mot et la couleur au texte du stimulus
 * crée les event listener sur les boutons de choix de couleur et resolve lorsqu'un clic est effectué
 * @param {Trial} trial
 * @returns { Promise }
 */
export const trialExecution = async function (trial) {
  return new Promise((resolve, reject) => {    
    let colorButtons = [
      document.querySelector("#red"),
      document.querySelector("#blue"),
      document.querySelector("#yellow"),
      document.querySelector("#green"),
    ];
    let startArea = document.querySelector('#startArea')
    let startButton = document.querySelector('#start')
    let stimulus = document.querySelector("#stimulus");


    let colorButtonsController = new AbortController();
    let mousemoveController = new AbortController();
    let mouseOutEarlyController = new AbortController();
    let mouseOutLateController = new AbortController();
     

    let performanceProblem = "";
    /**
     * recuperation et affichage du bouton start
     //TODO potentiellement attente maximum de 10s pour pas que le systeme enregistre eternellement en cas de bug/d'arret
     */
   
    startButton.style.visibility = 'visible'
    stimulus.style.visibility = 'hidden'
    /**
     * création de l'event sur le bouton start:
     * lance les event des boutons de choix de couleurs
     * lance le mouse tracking
     * affiche le stimulus
     * rend invisible le bouton start
     */
    startButton.addEventListener("click", async (e) => {
      /**
       * suppression du bouton start (invisible)
       */
      startButton.style.visibility = 'hidden'
      startArea.addEventListener("mouseleave", (e) =>{
        console.log("throw out")
        reject("outedEarly");
      },{
        signal: mouseOutEarlyController.signal,
      })

      setTimeout(() => {
        mouseOutEarlyController.abort();
        /**
       * Affichage du stimulus
       */
      stimulus.innerHTML = trial.word;
      stimulus.style.color = trial.textColor;
      stimulus.style.visibility = 'visible'
      /**
       * initialisation du temps de debut
       */
      trial.startTime = Date.now();
      /**
       * ajout des event listener sur les boutons de choix de couleur qui cloture l'essai
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
            if (trial.selectedColor !== trial.textColor) {
              performanceProblem = `${performanceProblem}/wrongSelection`;
            }
            resolve(performanceProblem);
          },
          {
            signal: colorButtonsController.signal,
          }
        );
      });
      //TODO bouton start disparait 300ms de pause affichage et libération souris

      

      //TODO what you want me to do
      let moved=false;
      startArea.addEventListener("mouseleave", (e) =>{
        moved=true
        console.log("moved")
      },{
        signal: mouseOutLateController.signal,
      })

      setTimeout(() => {
        mouseOutLateController.abort();
        if(!moved) reject("outedLate");
        else{
           /**
       * initialisation du mouse tracking
       */
      document.addEventListener(
        "mousemove",
        (e) => {
          //TODO Rendre cette fonction synchrone avec elle-même seulement. (new Thread synchrone) -> ya pas de thread en js c'est des promise
          //TODO : si la souris reste a la meme position plus de 500ms -> mettre la valeur "tooSlow" à $performanceProblem
          let position = [e.pageX, e.pageY];
          trial.mousePath.push(position);
        },
        {
          signal: mousemoveController.signal,
        }
      );
        }
      },500)
    },300)

    });
  }).then(async (performanceProblem) => {
    /**
     * si tout s'est bien passé, attends 500ms avant le prochain essai, sinon, affiche les informations en fonction
     */
    if (performanceProblem === "") {
      setTimeout(() => true, 500);
    }
    if (performanceProblem.endsWith("wrongSelection")) {
      await wrongChoicePopup();
    }
    if (performanceProblem.startsWith("tooSlow")) {
      await moveFasterPopup();
    }
    //rend le fil d'execution
    return
  }).catch(async(e) =>{
    if(e==="outedEarly"){
      await waitStimuliPopup();
      await trialExecution(trial)
    }
    else if(e==="outedLate"){
      await moveFasterPopup();
      await trialExecution(trial)
    }
    else console.error(e)
  });
};
