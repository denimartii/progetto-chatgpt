// Funzione per verificare se un anno è bisestile
function isBisestile(anno) {
    return (anno % 4 === 0 && anno % 100 !== 0) || (anno % 400 === 0);
}

function calcolaSettimaneEMesi() {
    // Ottieni la data inserita dall'utente
    const giorno = parseInt(document.getElementById('giorno').value);
    const mese = parseInt(document.getElementById('mese').value);
    const anno = parseInt(document.getElementById('anno').value);

    // Nascondi il messaggio di errore se la data è valida
    document.getElementById('errore').style.display = 'none';

    // Verifica che i dati siano validi
    if (isNaN(giorno) || isNaN(mese) || isNaN(anno) || giorno < 1 || mese < 1 || mese > 12 || anno < 1900) {
        document.getElementById('errore').innerHTML = "Data non valida. Per favore inserisci una data corretta.";
        document.getElementById('errore').style.display = 'block'; // Mostra l'errore
        document.getElementById('risultato').innerHTML = ""; // Nascondi i risultati
        document.getElementById('dataParto').innerHTML = ""; // Nascondi la data del parto
        return;
    }

    // Controlla se febbraio ha il numero corretto di giorni (28 o 29)
    if (mese === 2) {
        const maxGiorniFebbraio = isBisestile(anno) ? 29 : 28;
        if (giorno > maxGiorniFebbraio) {
            document.getElementById('errore').innerHTML = `Febbraio ha al massimo ${maxGiorniFebbraio} giorni nel ${anno}.`;
            document.getElementById('errore').style.display = 'block'; // Mostra l'errore
            document.getElementById('risultato').innerHTML = "";
            document.getElementById('dataParto').innerHTML = "";
            return;
        }
    }

    // Crea la data di inizio della gravidanza
    const dataInizio = new Date(anno, mese - 1, giorno); // mese - 1 per compatibilità con JavaScript (0-11 per i mesi)

    // Ottieni
