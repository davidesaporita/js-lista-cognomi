/**
 * chiedere all’utente il cognome
 * inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
 * stampa la lista ordinata alfabeticamente
 * scrivi anche la posizione della lista in cui  il nuovo utente si trova
 */

var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];


var surnameUser = prompt('Qual è il tuo cognome segreto?');
surnameList.push(capitalize(surnameUser.toLowerCase()));
surnameList.sort();
console.table(surnameList);
console.log(surnameList.length);

var i = 0;

while ( i < surnameList.length ) {
    if ( surnameList[i] == surnameUser ) {
        var position = i;
    }
    i++;
}

console.log('Complimenti! Il cognome inserito si trova in posizione ' + position);

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}