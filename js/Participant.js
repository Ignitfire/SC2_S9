import { nbTrials } from "../constants.js";
import { BlockRandom } from "./BlockRandom.js";
import { BlockSeq } from "./BlockSeq.js";

export const Participant = class{

    /**
     * @property { Integer }: Groupe du participant, valeurs possibles [1, 2]
     * Groupe 1 = 80% de congruent
     * Groupe 2 = 20% de congruent
     */
    group;

    /**
     * @property { BlockSeq | BlockRandom }: les blocks dans l'ordre
     */
    blocks;

    /**
     * @param {Integer} group 
     */
    constructor (group){
        if(nbTrials % 8 !== 0){
            throw new Error("le nombre d'essai par block doit etre divisible par 8")
        }
        /**
         * creation de la proportion de congruent en fonction du groupe
         */
        let congruentProportion;
        if(group === 1){
            congruentProportion = 80;
        }else if(group === 2){
            congruentProportion = 20;
        }else{
            throw new Error("Le groupe demandé n'existe pas (valeurs possibles [1, 2])")
        }
        this.group = group;

        /**
         * création des blocks et de leur ordre (alterné et premier block aleatoire)
         */
        let SeqOrRandFirst = Math.floor(Math.random() * 2);
        this.blocks = [];
        for(let i = 0; i<2; i++){
            let sequencial = new BlockSeq(congruentProportion);
            let random = new BlockRandom(congruentProportion);
            if(SeqOrRandFirst){
                this.blocks.push(sequencial);
                this.blocks.push(random)
            }else{
                this.blocks.push(random)
                this.blocks.push(sequencial)
            }
        }
    }

}