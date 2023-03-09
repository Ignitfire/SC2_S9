import { endingInstructions, startingInstructions } from "./js/view/instructions.js";
import { Participant } from "./js/model/Participant.js";
import { trialExecution } from "./js/trialExecution.js";
import {basePositionning} from "./elementPlacing.js"
basePositionning();



/**
 * creation du participant
 */
let part = new Participant(Math.floor(Math.random()*2)+1);

//!pour decider le groupe du participant
/* let part = new Participant(1); */

//!pour recuperer le compte des couleurs (voir Participant.js)
/* part.getColorCount().then((colorsCounts) => {
    console.log(colorsCounts)
}) */


/**
 * algorythme du programme
 */
await startingInstructions()
await part.trialCourse(trialExecution)
await endingInstructions()

console.log(part)
//exportData()
