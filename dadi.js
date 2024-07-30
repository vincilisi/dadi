function NumeroCasuale() {
    return Math.floor(Math.random() * (6 - 1) + 1);
}

function calcolaPunteggioGiocatore(tiri) {
    let punteggio = 0;
    for (let i = 0; i < tiri; i++) {
        punteggio +=NumeroCasuale();
    }
    return punteggio;
}

const numeroTiri = prompt("Inserisci il numero di tiri per ciascun giocatore:");
const punteggioGiocatore1 = calcolaPunteggioGiocatore(numeroTiri);
const punteggioGiocatore2 = calcolaPunteggioGiocatore(numeroTiri);

if (punteggioGiocatore1 > punteggioGiocatore2) {
    console.log("Giocatore 1 ha vinto con un punteggio di " + punteggioGiocatore1);
} else if (punteggioGiocatore2 > punteggioGiocatore1) {
    console.log("Giocatore 2 ha vinto con un punteggio di " + punteggioGiocatore2);
} else {
    console.log("È un pareggio! Entrambi i giocatori hanno lo stesso punteggio di " + punteggioGiocatore1);
}