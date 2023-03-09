
export {sequenceOrder, words, nbTrials, instructions, thanks, moveFasterinstructions, waitStimuliInstruction}

// bleu et jaune
// rouge et vert


/**
 * @type {Integer}: le nomre d'essai par Block
 */
let nbTrials = 8

/**
 * @type {Array<String>}: ordre des sequences d'essai
 */
const sequenceOrder = [ 'red', 'yellow', 'blue', 'green', 'yellow', 'red', 'green', 'blue' ];

/**
 * message affiché dans la fenetre en fin de passation
 */
const thanks = "merci d'avoir participé, vos résultats sont anonymisés et utilisés pour un traitement statistique. Veuilez ne pas recommencer l'experience pour ne pas fausser les données";

/**
 * message affiché dans la fenetre en debut de passation
 */
const instructions = "bonjour, L'experience suivante...";


/**
 * message affiché quand le participant attends de choisir avant de bouger
 */
const moveFasterinstructions = "une fois que le stimuli est présenté, commencez à vous diriger vers la case le plus rapidement possible";

const waitStimuliInstruction = "attendez que le stimuli apparraisse pour sortir de la case"

/**
 * mots utilisés comme stimuli dans l'experience avec leur couleur et leur caracteristique congruente ou non (boolean)
 * @type {Array<{
 *          word: String,
 *          color: String,
 *          isCongruent: Boolean
 *      }>}
 */
let words = [
    {
        word: "jaune",
        color: "blue",
        isCongruent: false
    },
    {
        word: "bleu",
        color: "blue",
        isCongruent: true
    },
    {
        word: "vert",
        color: "red",
        isCongruent: false
    },
    {
        word: "rouge",
        color: "red",
        isCongruent: true
    },
    {
        word: "bleu",
        color: "yellow",
        isCongruent: false
    },
    {
        word: "jaune",
        color: "yellow",
        isCongruent: true
    },
    {
        word: "rouge",
        color: "green",
        isCongruent: false
    },
    {
        word: "vert",
        color: "green",
        isCongruent: true
    }
]