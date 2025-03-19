import { FunctionalComponent } from "preact/src/index.d.ts";
import { Phonetics } from "../utils/utils.ts";

type Props = {
    phonetics: Phonetics[];
};

const Fonetica: FunctionalComponent<Props> = ({ phonetics }) => {
    return (
        <div>
            <h3>Fonética:</h3>
            <ul>
                {phonetics.map((phonetic, index) => (
                    <li key={index}>
                        {phonetic.text && <p><strong>Texto:</strong> {phonetic.text}</p>}
                        {phonetic.audio && (
                            <audio controls>
                                <source src={phonetic.audio} type="audio/mpeg" />
                                Tu navegador no soporta el audio.
                            </audio>
                        )}
                        {phonetic.sourceUrl && (
                            <p>
                                <a href={phonetic.sourceUrl} target="_blank">Fuente</a>
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Fonetica;
