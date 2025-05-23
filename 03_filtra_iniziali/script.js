/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const srcCharacter = "A";


// Dichiara la funzione qui.
/**
 * funzione che copia e filtra un array
 * @param {array} nameList lista elementi 
 * @param {string} srcCharacter filtro per iniziare
 * @returns {array} array filtrato
 */
function filteredArray(nameList, srcCharacter) {
    const filteredName = []; //array vuoto dove copiare gli elementi che iniziano per srcCharacter A

    // ciclo for dove indice = 0; indice < lunghezza array; scorri la lista un elemento alla volta
    for (let i = 0; i < nameList.length; i++) {
        const currentName = nameList[i]; 

        if (currentName[0] === srcCharacter) {
            filteredName.push(currentName);
        }
    }
    return filteredName
}

// Invoca la funzione qui e stampa il risultato in console

console.log(filteredArray(names, srcCharacter));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]