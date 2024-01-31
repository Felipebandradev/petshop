import ListaPosts from "@/components/ListaPosts";
import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import serverApi from "./api/server";
import ListaCategoria from "@/components/ListaCategoria";

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/posts.json`);

    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    /* Colocando os dados dos objetos dentro de um array */
    const arrayDePosts = Object.keys(dados).map((post) => {
      return {
        ...dados[post],
        id: post,
      };
    });
    console.log(arrayDePosts);

    /* Extraindo as categorias dos posts */

    const categorias = arrayDePosts.map((post) => post.categoria);
    /* Gerando um array de categorias unicas */
    const categoriasUnicas = [...new Set(categorias)];

    return {
      props: {
        posts: arrayDePosts,
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
  const [ListaDeposts, setListaDePosts] = useState(posts);
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState("");

  const filtrar = (event) => {
    const categoriaEscolhida = event.currentTarget.textContent;
    console.log(categoriaEscolhida);

    const postsFiltrados = posts.filter((post) => {
      return post.categoria === categoriaEscolhida;
    });

    setListaDePosts(postsFiltrados);
    setFiltroAtivo(true);

    /* Sinalizando State com texto/Categoria escolhoida */
    setCategoriaAtiva(categoriaEscolhida);
  };

  const limparFiltro = () => {
    setListaDePosts(posts);
    setFiltroAtivo(false);
    setCategoriaAtiva("");
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
        <h2>Pet Notícias: {ListaDeposts.length}</h2>

        <ListaCategoria
          categoria={categorias}
          catAtiva={categoriaAtiva}
          onlimpaFiltro={limparFiltro}
          onfiltro={filtrar}
          filtroAtivo={filtroAtivo}
        />

        <ListaPosts noticia={ListaDeposts} />
      </StyledHome>
    </>
  );
}
