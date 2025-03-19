import Layout from "./_layouts.tsx";

export default function Home() {
    return (
      <Layout>
        <h1>English dictionary</h1>
        <form method="GET" action="/words">
          <input
            type="text"
            name="word"
            placeholder="Search a word"
            required
          />
          <button type="submit">Search</button>
        </form>
      </Layout>
    );
  }