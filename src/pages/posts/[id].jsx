import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import serverApi from "../api/server";
import { useState } from "react";
import Link from "next/link";

const StyledPost = styled.article`
  h2::before {
    content: "📑 ";
  }

  div > a {
    text-decoration: none;
    background-color: var(--cor-primaria-fundo);
    color: var(--cor-primaria);
    padding: 0.5rem 1rem;
    border-radius: var(--borda-arredondada);
    &:hover {
      background-color: var(--cor-primaria-fundo-hover);
    }
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
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function Post({ post }) {
  const tituloPag = `${post.titulo} - PetShop 2024`;

  return (
    <>
      <Head>
        <title>{tituloPag}</title>
        <meta name="description" content={`${post.descricao}`} />
      </Head>
      <StyledPost>
        <h2> {post.titulo} </h2>

        <Container>
          <h3>{post.categoria}</h3>
          <p>{post.descricao}</p>
          <Link href={`/`}>Voltar</Link>
        </Container>
      </StyledPost>
    </>
  );
}
