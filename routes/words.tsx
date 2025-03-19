
// routes/dictionary.tsx
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "./_layouts.tsx";
import Phonetics from "../components/phonetics.tsx";
import Meanings from "../components/meanings.tsx";
import { Diccionario } from "../utils/utils.ts";


export const handler: Handlers<Diccionario[] | null> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const word = url.searchParams.get("word");

    if (!word) {
      return ctx.render(null);
    }

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      );
      if (!response.ok) throw new Error("Word not found");
      const data = await response.json();
      return ctx.render(data); // Pasamos todos los resultados
    } catch (err) {
      return ctx.render(null);
    }
  },
};

export default function Dictionary({ data }: PageProps<Diccionario[] | null>) {
  if (!data) {
    return (
      <Layout>
        <h1>Dictionary Search</h1>
        <form method="GET">
          <input
            type="text"
            name="word"
            placeholder="Enter a word"
            required
          />
          <button type="submit">Search</button>
        </form>
        <p>No results found. Try another word.</p>
      </Layout>
    );
  }

  // Agrupar phonetics y meanings de todas las entradas
  const allPhonetics = data.flatMap((entry) => entry.phonetics);
  const allMeanings = data.flatMap((entry) => entry.meanings);

  return (
    <Layout>
      <h1>Dictionary Search</h1>
      <form method="GET">
        <input
          type="text"
          name="word"
          placeholder="Enter a word"
          required
        />
        <button type="submit">Search</button>
      </form>

      <h2>{data[0].word}</h2>
      <Phonetics phonetics={allPhonetics} />
      <Meanings meanings={allMeanings} />
    </Layout>
  );
}
