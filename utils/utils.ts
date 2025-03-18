import Axios from "npm:axios"

export type Diccionario = {
    word: string,
    phonetics: Phonetics,
    meanings: Meanings
};

export type Phonetics  = {
    text: string,
    audio?: string,
    sourceURL?: string
}

export type Meanings = {
    partOfSpeech: string,
    definitions:{
        definition: string
        example?: string;
    }[]
    synonyms?: string[];
    antonyms?: string[];
    
}

type DiccionarioAPI = {
    word: string,
    phonetics: Phonetics,
    meanings: Meanings
}

export const getWord = async (word: string) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const {data} = await Axios.get<DiccionarioAPI[]>(url);
    return data[0] as Diccionario;
};
