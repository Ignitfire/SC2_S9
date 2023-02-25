
export {sequenceOrder, words, nbTrials, instructions, thanks, moveFasterinstructions}

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
const thanks = "merci c'etait sympa, on refait ça à l'occas le boss";

/**
 * message affiché dans la fenetre en debut de passation
 */
const instructions = "bonjour, voici les instructions, commence l'expe avant jte gaine con de Ron";


/**
 * message affiché quand le participant attends de choisir avant de bouger
 */
const moveFasterinstructions = "eh bouge zebi";



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