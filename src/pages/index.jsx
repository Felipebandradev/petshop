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

/* Executada No Servidor/Back-End */
/* Função getStaticProps 
Utilizada para a execução de Código server-side(neste caso, fetch na Api)
com o objetivo de gerar props com os dados processados.
 */
export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/posts`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    /* Após o processamento (desde que não haja erros), a getStaticProps
    retorna um objeto com uma propriedade chamada "props", e nesta propriedade
    colocamos um objeto com as props que queremos usar. No caso, usamos
    uma prop "posts" (pode ter qualquer nome) e é nela que colocamos os dados. */
    return {
      props: {
        posts: dados,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Home({ posts }) {
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

        <ListaPosts noticia={Listaposts} />
      </StyledHome>
    </>
  );
}
