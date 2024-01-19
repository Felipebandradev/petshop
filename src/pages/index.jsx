import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;

const StyledListasPosts = styled.div`
  article {
    background-color: #f7f7f7;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 250ms;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }

    & a{
      text-decoration: none;
      color: black;

      &:hover, &:focus{
        color: #7575d3;
      }
    }
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

        <StyledListasPosts>
          <article>
            <Link href="">
              <h3>Titulo post...</h3>
              <p>Subtítulo do post</p>
            </Link>
          </article>

          <article>
            <Link href="">
              <h3>Titulo post...</h3>
              <p>Subtítulo do post</p>
            </Link>
          </article>
        </StyledListasPosts>
      </StyledHome>
    </>
  );
}
