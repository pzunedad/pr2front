import { FunctionComponent } from "preact";
import { Diccionario } from "../utils/utils.ts";

const Phonetics: FunctionComponent<Diccionario> = (props) => {
    const { phonetics } = props;

    return (
        <div class="phonetics_container">
            <h2>Phonetics</h2>
            {phonetics.map((phonetic, index) => (
                <div key={index} class="phonetic_item">
                    <p><strong>Text:</strong> {phonetic.text}</p>
                    {phonetic.audio && (
                        <audio controls>
                            <source src={phonetic.audio} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    )}
                    {phonetic.sourceUrl && (
                        <p><strong>Source:</strong> <a href={phonetic.sourceUrl} target="_blank" rel="noopener noreferrer">Link</a></p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Phonetics;