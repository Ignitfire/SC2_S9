import { nbTrials } from "../../constants.js";
import { Trial } from "./Trial.js";

export const BlockRandom = class {

    /**
     * @property { Array<Trials> }: tableau contenant les essais
     */
    trials;

    /**
     * @param {Integer} congruentProportion : pourcentage de mot congruents
     */
    constructor(congruentProportion) {
        /**
         * boucle sur le nombre de trial à créer
         */
        this.trials = []
        for (let i = 0; i < nbTrials; i++) {
            /**
             * choix aleatoire de la couleur
             */
            let colorChoice = Math.floor(Math.random() * 4);
            let textColor;
            if (colorChoice == 0) {
                textColor = "red"
            } else if (colorChoice == 1) {
                textColor = "blue"
            } else if (colorChoice == 2) {
                textColor = "yellow"
            } else {
                textColor = "green"
            }
            /**
             * choix aleatoire de la condition congruent/nonCongruent pour le mot
             */

            let isCongruent = Math.random() * 100 < congruentProportion

            /**
             * création du trial avec les parametres generés
             */
            let trial = new Trial(isCongruent, textColor)
            /**
             * verification que le mot precedent n'est pas le meme
            */
           //TODO : + verif qu'il n'y a pas deja $nbTrial/$words.length fois le meme trial dans $this.trial
           if (this.trials.length<2){
               this.trials.push(trial)
            }else if (trial.word !== this.trials[i - 1].word) {
                this.trials.push(trial)
            } else {
                i--;
            }
        }
    }


    /**
   * parcours des essais du participants en appliquant la fonction
   * @param {Function} callbackFunction
   */
async trialCourse(callbackFunction) {
    for (let trial of this.trials) {
      await callbackFunction(trial);
    }
  }
}