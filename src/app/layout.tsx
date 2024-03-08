import type { Metadata } from "next";
import "./globals.css";
import Titulo from "./components/Titulo";

export const metadata: Metadata = {
  title: "Primeira Aula",
  description: "Primeira aula de Ling. Emergentes - 4º semestre",
  keywords: ["NextJS", "UniSenac"]    // ajuda com o ranking de páginas em search do google
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Titulo />
        {children}
      </body>
    </html>
  );
}
