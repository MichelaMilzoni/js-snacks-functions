/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

/**
 * funzione che accetta una stringa come Input, e restituisce un saluto personalizzato
 * @param {string} userNamename Nome a cui indirizzare il saluto
 * @returns {string} saluto personalizzato
 */
function greeting(userNamename) {
    return `Ciao ${userName}`;
}
// Invoca la funzione qui e stampa il risultato in console

console.log(greeting(userName));


//Risultato atteso se si passa 'Mario': // ciao Mario
