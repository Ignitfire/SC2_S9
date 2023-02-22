
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
        word: "bonjour",
        color: "blue",
        isCongruent: false
    },
    {
        word: "blue",
        color: "blue",
        isCongruent: true
    },
    {
        word: "salut",
        color: "red",
        isCongruent: false
    },
    {
        word: "red",
        color: "red",
        isCongruent: true
    },
    {
        word: "ciao ciao",
        color: "yellow",
        isCongruent: false
    },
    {
        word: "yellow",
        color: "yellow",
        isCongruent: true
    },
    {
        word: "buongiorno la pizza",
        color: "green",
        isCongruent: false
    },
    {
        word: "green",
        color: "green",
        isCongruent: true
    },
    {
        word: "bonjourggggg2",
        color: "blue",
        isCongruent: false
    },
    {
        word: "blue2",
        color: "blue",
        isCongruent: true
    },
    {
        word: "salut2",
        color: "red",
        isCongruent: false
    },
    {
        word: "red2",
        color: "red",
        isCongruent: true
    },
    {
        word: "ciao ciao2",
        color: "yellow",
        isCongruent: false
    },
    {
        word: "yellow2",
        color: "yellow",
        isCongruent: true
    },
    {
        word: "buongiorno la pizza2",
        color: "green",
        isCongruent: false
    },
    {
        word: "green2",
        color: "green",
        isCongruent: true
    },
    {
        word: "bonjour3",
        color: "blue",
        isCongruent: false
    },
    {
        word: "blue3",
        color: "blue",
        isCongruent: true
    },
    {
        word: "salut3",
        color: "red",
        isCongruent: false
    },
    {
        word: "red3",
        color: "red",
        isCongruent: true
    },
    {
        word: "ciao ciao3",
        color: "yellow",
        isCongruent: false
    },
    {
        word: "yellow3",
        color: "yellow",
        isCongruent: true
    },
    {
        word: "buongiorno la pizza3",
        color: "green",
        isCongruent: false
    },
    {
        word: "green3",
        color: "green",
        isCongruent: true
    }
]