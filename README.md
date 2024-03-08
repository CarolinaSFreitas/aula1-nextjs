# Aula01 - NextJS
Primeira aula de Linguagens de Programação Emergentes - NextJS

## 🛠️ Criando um projeto
1. `` npm install -g npm@10.5.0 ``
2. `` npx create-next-app@latest <aula1> ``
3. `` cd <aula1> ``
4. `` npm run dev ``
5. http://localhost:3000/ 

# 📁 Os arquivos:

1. "page.tsx" renderiza a página e esse arquivo quando dentro de pastas cria uma rota, como por exemplo http://localhost:3000/Produtos
   ![image](https://github.com/CarolinaSFreitas/aula1-nextjs/assets/99994934/978f3991-15d6-4041-aa06-1ec048e5f979)
   
*obs: esses outros arquivos page.tsx precisa ser criado dentro do diretório do "src\app"*

3. "page.tsx" dentro da pasta padrão que é criada no `` npx create `` reune os componentes criados 

4. "layout.tsx" armazena o layout da página, é sempre o mesmo e *abaixo* (da tag que envolve o {children} ficam os arquivos "page.tsx"
   
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

## 🎨 Tailwind CSS:
- Em "global.css"
- `` CTRL + Shift + P ``, "Change Language Model" e seleciona o Tailwind

#

### 📝 Notas:

- Nunca um componente pode ter mais de uma tag, pra fazer isso precisa encapsular (com uma div por exemplo). Exemplo criando componente de "Título":
  
![image](https://github.com/CarolinaSFreitas/aula1-nextjs/assets/99994934/e2cff08e-265a-495d-b15d-a387fbdf68d6)

- Uso do componente no layout.tsx:

![image](https://github.com/CarolinaSFreitas/aula1-nextjs/assets/99994934/c1981ca9-3a44-426e-b19e-90829799111c)

- Bootstrap de Tailwind: **Flowbite**. Substituindo o que tem no componente do <Titulo />, cola os componentes do Flowbite e adiciona o componente no "layout.tsx"
![image](https://github.com/CarolinaSFreitas/aula1-nextjs/assets/99994934/3c257a9e-4ac7-4f69-ab4d-a6428bfe03f1)
![image](https://github.com/CarolinaSFreitas/aula1-nextjs/assets/99994934/7796dd13-8326-41e3-be50-1233bb6884b1)
![image](https://github.com/CarolinaSFreitas/aula1-nextjs/assets/99994934/7ecc7adb-b569-4806-b924-7ea3f18c503d)

Esse componente de Título vai ser "fixado" em todas as rotas 

- Pra "linkar" as rotas como âncoras, trocar a tag de <a> para <Link> e trocando o href="/rota" para ir para as rotas criadas, exemplo:
![image](https://github.com/CarolinaSFreitas/aula1-nextjs/assets/99994934/694d1bbe-4249-4b73-a680-a91d7d9b986a)

- Para adicionar detalhes num item, exemplo na rota "/produtos" para ela ter detalhes de um produto, cria-se uma pasta com uma sub-pasta com esse formato: **"[id]"**, que é uma variável. Então, na rota tendo esse parâmetro variável vai trazer os detalhes do produto com o id definido, ou qualquer outro tipo de variável.
  ![image](https://github.com/CarolinaSFreitas/aula1-nextjs/assets/99994934/51f32afc-3bc1-48cc-94cd-90a5f8d8f8ec)
  ![image](https://github.com/CarolinaSFreitas/aula1-nextjs/assets/99994934/c5d97061-b005-49a3-a3c3-9dd95129e015)

- O nome das pastas não podem iniciar com letra maiúscula 
