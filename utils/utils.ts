import Axios from "npm:axios"

export type Diccionario = {
    word: string;
    phonetics: {
        text: string;
        audio?: string;
        sourceUrl?: string;
    }[];
    meanings: {
        partOfSpeech: string;
        definitions: {
            definition: string;
            synonyms?: string[];
            antonyms?: string[];
            example?: string;
        }[];
    }[];
};

export const getWord = async (word: string): Promise<Diccionario> => {
    try {
        const response = await Axios.get<Diccionario>(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching word definition:", error);
        throw new Error("Failed to fetch word definition");
    }
};