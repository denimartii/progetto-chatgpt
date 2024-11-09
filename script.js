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

    // Ottieni la data odierna
    const dataOggi = new Date();

    // Verifica se la data inserita è nel futuro
    if (dataInizio > dataOggi) {
        document.getElementById('errore').innerHTML = "La data di inizio gravidanza non può essere nel futuro.";
        document.getElementById('errore').style.display = 'block'; // Mostra l'errore
        document.getElementById('risultato').innerHTML = "";
        document.getElementById('dataParto').innerHTML = "";
        return;
    }

    // Calcola la differenza in millisecondi
    const differenza = dataOggi - dataInizio;

    // Converti la differenza in giorni
    const giorniTrascorsi = Math.floor(differenza / (1000 * 60 * 60 * 24));

    // Calcola le settimane
    const settimane = Math.floor(giorniTrascorsi / 7);

    // Calcola i mesi (approssimativamente)
    const mesi = (settimane / 4.3).toFixed(1); // Utilizziamo 4.3 settimane per mese

    // Calcola la data di parto stimata (aggiungendo 40 settimane)
    const dataParto = new Date(dataInizio);
    dataParto.setDate(dataInizio.getDate() + (40 * 7)); // Aggiungi 40 settimane

    // Mostra i risultati
    document.getElementById('risultato').innerHTML = `Hai completato ${settimane} settimane, ovvero circa ${mesi} mesi di gravidanza.`;
    document.getElementById('dataParto').innerHTML = `Data stimata del parto: ${dataParto.toLocaleDateString('it-IT')}`;
}
