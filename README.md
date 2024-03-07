# Aula01 - NextJS
Primeira aula de Linguagens de Programação Emergentes - NextJS

## Criando um projeto
1. `` npm install -g npm@10.5.0 ``
2. `` npx create-next-app@latest <aula1> ``
3. `` cd <aula1> ``
4. `` npm run dev ``
5. http://localhost:3000/ 

## Hello World
- Em layout.tsx:
````
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Primeira Aula",
  description: "Primeira aula de Ling. Emergentes - 4º semestre",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
````

- Em page.tsx:
````
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
    </main>
  );
}
````
