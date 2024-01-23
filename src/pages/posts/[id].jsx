import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";

const StyledPost = styled.article`
  h2::before {
    content: "📑 ";
  }
`;

export async function getStaticProps({ params }) {
    const {id} = params;
    
}

export async function getStaticPaths(){
    return{
        paths:[],
        fallback:"blocking"
    }
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
