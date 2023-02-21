import { sequenceOrder } from "../constants.js";
import { Trial } from "./Trial.js";


export const Sequence = class{

    /**
     * @property { Array<Trial> }: les essai de la sequence
     */
    trials;

    /**
     * @param {Integer} congruentProportion : pourcentage de mot congruents
     */
    constructor (congruentProportion) {
        console.log('seq')
        this.trials = []
        for(let i=0; i < sequenceOrder.length; i++){
            let isCongruent = Math.random()*100<=congruentProportion 
            let trial = new Trial(isCongruent, sequenceOrder[i]);
            /**
             * verification que le mot precedent n'est pas le meme
             */
            if (this.trials.length<2){
                this.trials.push(trial)
             }else if(trial.word !== this.trials[i-1].word){
                this.trials.push(trial)
            }else{
                i--;
            }
        }
    }
}