import ListaPosts from "@/components/ListaPosts";
import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import serverApi from "./api/server";

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;

const StyledCategorias = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: var(--borda-arredondada) 1rem;

  button {
    margin: var(--borda-arredondada);
    padding: 0.5rem;

    border-radius: var(--borda-arredondada);
    border: none;

    background-color: #a17dec;
    color: var(--cor-primaria);

    font-size: 0.9rem;

    &:hover {
      background-color: #bb9df2;
    }
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

  const filtrar = (event) => {
    const categoriaEscolhida = event.currentTarget.innerText;
    console.log(categoriaEscolhida);
  };

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

        <StyledCategorias>
          {categorias.map((categoria, indice) => {
            return (
              <button key={indice} onClick={filtrar}>
                {categoria}
              </button>
            );
          })}
        </StyledCategorias>

        <ListaPosts noticia={Listaposts} />
      </StyledHome>
    </>
  );
}
