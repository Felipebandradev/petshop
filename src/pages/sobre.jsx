import Container from "@/components/ui/Container";
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

        <Container>
          <h3>Missão</h3>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            explicabo eius blanditiis, consectetur cum cupiditate animi non ab.
            Numquam, beatae.
          </p>

          <h3>Visão</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            dolores corporis. Obcaecati ea cum quis accusamus quae corporis
            debitis maiores quia veritatis facere, minima totam molestias ipsam
            aliquid odit nemo!
          </p>

          <h3>Valores</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            dicta ducimus id nihil laborum mollitia aliquid, tempora saepe dolor
            nostrum obcaecati enim sunt? Maxime deleniti deserunt voluptatem
            tempora labore voluptatum?
          </p>
        </Container>
      </StyledSobre>
    </>
  );
}
