# Aula01 - NextJS
Primeira aula de Linguagens de Programação Emergentes - NextJS

## 🛠️ Criando um projeto
1. `` npm install -g npm@10.5.0 ``
2. `` npx create-next-app@latest <aula1> ``
3. `` cd <aula1> ``
4. `` npm run dev ``
5. http://localhost:3000/ 

# Os arquivos:

1. "page.tsx" renderiza a página e esse arquivo quando dentro de pastas cria uma rota, como por exemplo http://localhost:3000/Produtos
   ![image](https://github.com/CarolinaSFreitas/aula1-nextjs/assets/99994934/978f3991-15d6-4041-aa06-1ec048e5f979)
   
*obs: esses outros arquivos page.tsx precisa ser criado dentro do diretório do "src\app"*

3. "page.tsx" dentro da pasta padrão que é criada no `` npx create `` reune os componentes criados 


## 🌎 Hello World
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
- Saída:
![image](https://github.com/CarolinaSFreitas/aula1-nextjs/assets/99994934/079308f4-6587-4af8-b682-a3f9910a72c2)

## Tailwind CSS:
- Em "global.css"
- `` CTRL + Shift + P ``, "Change Language Model" e seleciona o Tailwind

