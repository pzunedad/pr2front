// layouts/Layout.tsx
import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

export default function Layout({ children }: { children: ComponentChildren }) {
  return (
    <>
      <Head>
        <title>Diccionario Inglés</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <nav>
        <a href="/">Home</a>
      </nav>
      <main >
        {children}
      </main>
    </>
  );
}