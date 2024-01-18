import Head from "next/head";
import styled from "styled-components";

const StyledSobre = styled.section`
  h2::before {
    content: "💡 ";
  }
`;

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - Petshop 2024</title>
        <meta name="description" content="Nos conheça Melhor" />
      </Head>
      <StyledSobre>
        <h2>Sobre nosso PetShop </h2>
      </StyledSobre>
    </>
  );
}
