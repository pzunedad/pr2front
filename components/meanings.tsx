import { FunctionalComponent } from "preact/src/index.d.ts";
import { Meanings } from "../utils/utils.ts";

type Props = {
    meanings: Meanings[];
};

const Significados: FunctionalComponent<Props> = ({ meanings }) => {
    return (
        <div>
            <h3>Significados:</h3>
            {meanings.map((meaning, index) => (
                <div key={index}>
                    <h4>{meaning.partOfSpeech}</h4>
                    <ul>
                        {meaning.definitions.map((def, i) => (
                            <li key={i}>
                                <p><strong>Definición:</strong> {def.definition}</p>
                                {def.example && <p><em>Ejemplo:</em> {def.example}</p>}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Significados;
