/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */



// Dichiara la funzione qui.
/**
 * funzione che accetta una stringa e conti il numero delle vocali 
 * @param {array} nameList lista elementi 
 * @param {string} srcCharacter filtro per iniziare
 * @returns {array} array filtrato
 */
function vowelCounter(str) {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) {
            sum++;
        }
    }
    return sum;
}
// Invoca la funzione qui e stampa il risultato in console
const word = 'javascript'.toLowerCase().trim();
const vowelNumber = vowelCounter(word);
console.log(`Numero di vocali: ${vowelNumber}`);






//Risultato atteso se si passa 'javascript': 3 (a, a, i)