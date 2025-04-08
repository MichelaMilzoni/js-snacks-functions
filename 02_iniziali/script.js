/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

// Dichiara la funzione qui.
/**
 * Funzione che estrae e copia in un array (names) le iniziali delle stringhe 
 * @param {array} namesList lista elementi (dentro array)
 * @returns {array} array che contiene le iniziali
 */

// Invoca la funzione qui e stampa il risultato in console
function extractInitials(namesList) {
    const initialsArray = [];

    for (let i = 0; i < namesList.length; i++) {
        const currentName = namesList[i];
        let initials = '';
        const character = currentName.split(' '); // divide il nome in caratteri singoli

        for (let x = 0; x < character.length; x++) {
            initials += character[x].charAt(0).toUpperCase(); // Ottiene la prima lettera in maiuscolo.
        }
        initialsArray.push(initials);
    }   
    return initialsArray;
    }
    

    const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
    const initials = extractInitials(names);
    console.log('Array: ', names);
    console.log('Array di iniziali: ', initials);
    
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]