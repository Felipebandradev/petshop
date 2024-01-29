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
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState("");

  const filtrar = (event) => {
    const categoriaEscolhida = event.currentTarget.textContent;
    console.log(categoriaEscolhida);

    const postsFiltrados = posts.filter((post) => {
      return post.categoria === categoriaEscolhida;
    });

    setListaPosts(postsFiltrados);
    setFiltroAtivo(true);

    /* Sinalizando State com texto/Categoria escolhoida */
    setCategoriaAtiva(categoriaEscolhida);
  };

  const limparFiltro = () => {
    setListaPosts(posts);
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
        <h2>Pet Notícias</h2>

        <ListaCategoria
          categoria={categorias}
          catAtiva={categoriaAtiva}
          onlimpaFiltro={limparFiltro}
          onfiltro={filtrar}
          filtroAtivo={filtroAtivo}
        />

        <ListaPosts noticia={Listaposts} />
      </StyledHome>
    </>
  );
}
