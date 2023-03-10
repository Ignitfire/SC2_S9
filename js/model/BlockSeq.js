import { nbTrials } from "../../constants.js";
import { Sequence } from "./Sequence.js";

export const BlockSeq = class{

    /**
     * @property { Array<Sequence> }: tableau contenant les sequences d'essai
     */
    sequences;

    /**
     * @param {Integer} congruentProportion : pourcentage de mot congruents
     */
    constructor (congruentProportion){
        /**
         * boucle sur le nombre de sequence à créer
         */
        this.sequences = [];
        for(let i=0; i < nbTrials/8; i++){
            this.sequences.push(new Sequence(congruentProportion))
        }
    }

    /**
   * parcours des essais du participants en appliquant la fonction
   * @param {Function} callbackFunction
   */
async trialCourse(callbackFunction) {
    for (let sequence of this.sequences) {
      await sequence.trialCourse(callbackFunction);
    }
  }

    
}