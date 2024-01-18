import Head from "next/head";
import styled from "styled-components";

const StyledContato = styled.section`
  h2::before {
    content: "💌 ";
  }
`;

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - Petshop 2024</title>
        <meta name="description" content="Fale conosco sobre o petshop.." />
      </Head>
      <StyledContato>
        <h2>Fale conosco</h2>
      </StyledContato>
    </>
  );
}
