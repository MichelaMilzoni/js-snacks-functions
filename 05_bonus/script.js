/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

/**
 * funzione che accetta una stringa come Input, e restituisce un saluto personalizzato
 * @param {string} userName Nome a cui indirizzare il saluto
 * @returns {string} saluto personalizzato
 */
function greeting(userName) {
    const currentHour = new Date().getHours(); // per ottenere l'ora corrente
    let greeting = '';

    if (currentHour < 13) {
        greeting = 'bungiorno';
    } else if (currentHour < 17) {
        greeting = 'Buon pomeriggio';
    } else {
        greeting = 'Buonasera';
    }
    return `${greeting} ${userName}`; // saluto personalizzato
}
// Invoca la funzione qui e stampa il risultato in console
const userName = 'Mario';
console.log(greeting(userName));
