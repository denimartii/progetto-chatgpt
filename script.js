// Funzione per verificare se un anno è bisestile
function isBisestile(anno) {
    return (anno % 4 === 0 && anno % 100 !== 0) || (anno % 400 === 0);
}

// Funzione principale per calcolare settimane e mesi
function calcolaSettimaneEMesi() {
    const giorno = parseInt(document.getElementById('giorno').value);
    const mese = parseInt(document.getElementById('mese').value);
    const anno = parseInt(document.getElementById('anno').value);

    if (isNaN(giorno) || isNaN(mese) || isNaN(anno) || giorno < 1 || mese < 1 || mese > 12 || anno < 1900) {
        document.getElementById('risultato').innerHTML = "Inserisci una data valida.";
        return;
    }

    // Determina i giorni validi per il mese, considerando l'anno bisestile
    const giorniMese = [31, (isBisestile(anno) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (giorno > giorniMese[mese - 1]) {
        document.getElementById('risultato').innerHTML = `Il mese ${mese} dell'anno ${anno} ha solo ${giorniMese[mese - 1]} giorni.`;
        return;
    }

    // Crea la data di inizio della gravidanza
    const dataInizio = new Date(anno, mese - 1, giorno); // mese - 1 per compatibilità con JavaScript (0-11 per i mesi)

    // Ottieni la data odierna
    const dataOggi = new Date();

    // Calcola la data limite di 12 mesi fa
    const dataLimite12Mesi = new Date();
    dataLimite12Mesi.setMonth(dataOggi.getMonth() - 12);

    // Verifica se la data di inizio gravidanza è più vecchia di 12 mesi
    if (dataInizio < dataLimite12Mesi) {
        document.getElementById('risultato').innerHTML = "La data di inizio gravidanza non può essere più vecchia di 12 mesi.";
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
