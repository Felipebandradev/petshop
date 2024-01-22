import ListaPosts from "@/components/ListaPosts";
import Head from "next/head";
import styled from "styled-components";
import arrayPosts from "./api/array-posts";

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;

export default function Home() {
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
        <ListaPosts array={arrayPosts} />
      </StyledHome>
    </>
  );
}
