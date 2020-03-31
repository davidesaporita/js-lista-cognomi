/**
 * chiedere all’utente il cognome
 * inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
 * stampa la lista ordinata alfabeticamente
 * scrivi anche la posizione della lista in cui  il nuovo utente si trova
 */

var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];


var surnameUser = capitalize(prompt('Qual è il tuo cognome segreto?').toLowerCase());

surnameList.push(surnameUser);
surnameList.sort();

console.log('Il cognome aggiunto è ' + surnameUser);
console.table(surnameList);

var position = surnameList.indexOf(surnameUser);

console.log('Complimenti! Il cognome inserito si trova in posizione ' + position);

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Chiedo scusa ma ho fatto tutto in 15 minuti causa spesa