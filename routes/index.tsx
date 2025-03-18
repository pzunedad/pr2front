export default function Home() {
    return (
        <div>
            <h2>Bienvenido al Diccionario</h2>
            <form method="get">
                <label for="word">Buscar una palabra:</label>
                <input type="text" id="word" name="word" required />
                <button type="submit">Buscar</button>
            </form>
            <p>Ingresa una palabra en el campo de arriba para obtener su definición, fonética y más.</p>
        </div>
    );
}