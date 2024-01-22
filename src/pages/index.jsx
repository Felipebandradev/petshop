import ListaPosts from "@/components/ListaPosts";
import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const CarrergarListaPosts = async () => {
      try {
        const resposta = await fetch(`http://10.20.46.35:2112/posts`);
        const dados = await resposta.json();
        setPosts(dados);
        console.log(dados);
      } catch (error) {
        console.error("Houve um error: " + error);
      }
    };

    CarrergarListaPosts();
  }, []);

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
        <ListaPosts listaP={posts} />
      </StyledHome>
    </>
  );
}
