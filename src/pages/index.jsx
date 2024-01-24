import ListaPosts from "@/components/ListaPosts";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import serverApi from "./api/server";

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/posts`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    /* Extraindo as categorias dos posts */

    const categorias = dados.map((post) => post.categoria);
    /* Gerando um array de categorias unicas */
    const categoriasUnicas = [...new Set(categorias)];

    return {
      props: {
        posts: dados,
        categorias: categoriasUnicas, // [] provisório
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Home({ posts, categorias }) {
  const [Listaposts, setListaPosts] = useState(posts);

  return (
    <>
      <Head>
        <title>Petshop 2024</title>
        <meta name="description" content="Petshop sem igual leia o maioral" />
        <meta
          name="keywords"
          content="Notícias, petshop, pet Notícias, gato, cachorro, dinossauro..."
        />
      </Head>
      <StyledHome>
        <h2>Pet Notícias</h2>

        <div>
          {categorias.map((categoria, indice) => {
            return <button key={indice}>{categoria}</button>;
          })}
        </div>

        <ListaPosts noticia={Listaposts} />
      </StyledHome>
    </>
  );
}
