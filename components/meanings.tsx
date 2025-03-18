import { FunctionComponent } from "preact";
import { Diccionario } from "../utils/utils.ts";

const Meanings: FunctionComponent<Diccionario> = (props) => {
    const { meanings } = props;

    return (
        <div class="meanings_container">
            <h2>Meanings</h2>
            {meanings.map((meaning, index) => (
                <div key={index} class="meaning_item">
                    <p><strong>Part of Speech:</strong> {meaning.partOfSpeech}</p>
                    <ul>
                        {meaning.definitions.map((definition, defIndex) => (
                            <li key={defIndex}>
                                <p><strong>Definition:</strong> {definition.definition}</p>
                                {definition.synonyms && definition.synonyms.length > 0 && (
                                    <p><strong>Synonyms:</strong> {definition.synonyms.join(", ")}</p>
                                )}
                                {definition.antonyms && definition.antonyms.length > 0 && (
                                    <p><strong>Antonyms:</strong> {definition.antonyms.join(", ")}</p>
                                )}
                                {definition.example && (
                                    <p><strong>Example:</strong> {definition.example}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Meanings;