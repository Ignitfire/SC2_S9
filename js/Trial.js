import { words } from "../constants.js";

export const Trial = class{

    /**
     * @property { String }: mot affiché
     */
    word;

    /**
     * @property { Boolean }: true si le mot affiché est congruent, false sinon
     */
    isCongruent;

    /**
     * @property { String }: couleur du mot affiché
     */
    textColor;

    /**
     * @property { String }: id du bouton sélectionné
     */
    selectedColor;

    /**
     * @property { Integer }: temps en millisecondes au debut de l'essai
     */
    startTime;

    /**
     * @property { Integer }: temps en millisecondes quand le bouton de couleur est cliqué
     */
    endTime;

    /**
     * @property { Integer }: difference de temps entre debut et fin de l'essai
     */
    latency;


    /**
     * @param {Boolean} isCongruent : pourcentage de mot congruents
     * @param {String} textColor : pourcentage de mot congruents
     */
    constructor (isCongruent, textColor){
        /**
         * recuperation d'un mot aleatoire selon les parametres
         */
        let matchingWords = words.filter(w => w.isCongruent == isCongruent && w.color == textColor);
        if(matchingWords.length <1){
            throw new Error("il n'y a pas de mots qui correspondent aux parametres") 
        }
        let randomChoice = Math.floor(Math.random() * matchingWords.length);

        /**
         * instanciation des attributs d'instance
        */
        this.word = matchingWords[randomChoice].word;
        this.isCongruent = isCongruent;
        this.textColor = textColor;
    }

    /**
     * le setter se charge d'instancier this.endTime et this.latency en fonction du parametre
     * @param { Integer } endTime: le temps au moment du clic sur le bouton choisi 
     */
    set endTime (endTime) {
        if(!this.startTime){
            throw new Error("Le temps du debut de l'essai n'a pas été enregistré");
        }
        this.endTime = endTime;
        this.latency = endTime - this.startTime;
    }


}