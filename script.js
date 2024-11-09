/* Stili per la pagina */
body {
    font-family: 'Times New Roman', serif; /* Font modificato */
    background: linear-gradient(to right, #fce4ec, #ff80ab); /* Gradiente rosa */
    margin: 0;
    padding: 0;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* L'altezza dell'intero schermo */
    overflow: hidden; /* Impedisce lo scroll */
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 80%;
    max-width: 1200px;
    padding: 40px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.9); /* Sfondo bianco semitrasparente */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.left-side {
    flex: 1;
    padding: 20px;
    text-align: left;
    background-color: #ffffff; /* Bianco */
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.right-side {
    flex: 1;
    padding: 20px;
    text-align: center;
    position: relative;
}

h1 {
    color: #d81b60; /* Rosa scuro */
    font-size: 2.5em;
    margin-top: 20px;
    font-family: 'Times New Roman', serif;
}

.form-container {
    margin-top: 20px;
}

label {
    display: block;
    margin-bottom: 10px;
    font-size: 1.2em;
    color: #d81b60;
}

input[type="number"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #d81b60;
    border-radius: 4px;
    font-size: 1em;
    box-sizing: border-box;
}

button {
    padding: 10px 20px;
    background-color: #d81b60; /* Rosa scuro */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2em;
    width: 100%;
}

button:hover {
    background-color: #c2185b; /* Rosa più scuro */
}

.result {
    margin-top: 20px;
    padding: 15px;
    background-color: #f8bbd0; /* Rosa chiaro */
    border: 1px solid #d81b60;
    border-radius: 4px;
    font-size: 1.5em;
    color: #d81b60;
    text-align: center;
}

.heart {
    font-size: 3em;
    color: #d81b60;
    margin-bottom: 20px;
}

/* Immagine sinistra */
.left-side img {
    width: 80%;
    max-width: 400px;
    border-radius: 10px;
}

/* Immagine destra (feto) */
.right-side img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Adatta l'immagine senza distorcerla */
    border-radius: 10px;
}
