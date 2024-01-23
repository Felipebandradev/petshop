import ListaPosts from "@/components/ListaPosts";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;

/* Executada No Servidor/Back-End */
export async function getStaticProps() {
  try {
    const resposta = await fetch(`http://10.20.46.35:2112/posts`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    return {
      props: {
        posts: dados,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
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
