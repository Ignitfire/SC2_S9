import { Trial } from "./Trial.js";

export const BeginigBlock = class {
  /**
   * @property { Array<Trials> }: tableau contenant les essais
   */
  trials;

  /**
   * creation de 16 essais aleatoires avec une proportion de 50% de congruent et 25% par couleur
   */
  constructor() {
    this.trials = []
    for (let i = 0; i < 16; i++) {
      //création des parametres du mot
      let isCongruent = Math.floor(Math.random() * 2) == 0 ? true : false;
      let randColor = Math.floor(Math.random() * 4);
      let textColor;
      if (randColor == 0) {
        textColor = "red";
      } else if (randColor == 1) {
        textColor = "blue";
      } else if (randColor == 2) {
        textColor = "yellow";
      } else {
        textColor = "green";
      }
      /**
       * création du trial avec les parametres generés
       */
      let trial = new Trial(isCongruent, textColor);
      /**
       * verification que le mot precedent n'est pas le meme
       */
      if (this.trials.length < 2) {
        this.trials.push(trial);
      } else if (trial.word !== this.trials[i - 1].word) {
        this.trials.push(trial);
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

};
