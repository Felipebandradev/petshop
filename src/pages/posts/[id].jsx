import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import serverApi from "../api/server";

const StyledPost = styled.article`
  h2::before {
    content: "📑 ";
  }
`;

export async function getStaticProps({ params }) {
  const { id } = params;

  try {
    const resposta = await fetch(`${serverApi}/posts/${id}`);

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }
    const dados = await resposta.json();

    return {
      props: {
        post: dados,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function Post() {
  return (
    <>
      <Head>
        <title>Titulo do Post.... - PetShop 2024</title>
        <meta name="description" content="Descrição do post..." />
      </Head>
      <StyledPost>
        <h2>Título do Post</h2>

        <Container>
          <h3>Categoria...</h3>
          <p>Descrição do post...</p>
        </Container>
      </StyledPost>
    </>
  );
}
