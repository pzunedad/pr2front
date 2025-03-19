
export type Diccionario = {
    word: string;
    phonetics: Phonetics[];
    meanings: Meanings[];
};

export type Phonetics = {
    text?: string;
    audio?: string;
    sourceUrl?: string;
};

export type Meanings = {
    partOfSpeech: string;
    definitions: {
        definition: string;
        example?: string;
    }[];
    synonyms?: string[];
    antonyms?: string[];
};

export type DiccionarioAPI = {
    word: string;
    phonetics: Phonetics[];
    meanings: Meanings[];
};

