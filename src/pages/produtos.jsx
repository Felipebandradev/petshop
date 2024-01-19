import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";

const StyledProdutos = styled.section`
  h2::before {
    content: "🎁 ";
  }

  article{
    padding: 1rem;
  }

  h3::before{
    content: "🛒 ";
  }

  @media screen and (min-width: 800px) {
    /* Esta div é o Styled Container, mas com uma formatação que
    só vale para esta página Produtos */
    div{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }
  }
 
`;

export default function Produtos() {
  return (
    <>
      <Head>
        <title>Produtos - Petshop 2024</title>
        <meta
          name="description"
          content="Veja os melhores produtos pro seu pet até se for um T-rex"
        />
        <meta
          name="keywords"
          content="Ração, Brinquedos, Banho, Tosa, coleira..."
        />
      </Head>
      <StyledProdutos>
        <h2>Conheça nossos Produtos </h2>

        <Container>
          <article>
            <h3>Banho e Tosa</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              doloremque? Eum, fuga. Vel in sed ex vero id molestiae deserunt
              ea, minus incidunt itaque nostrum accusamus dolores commodi dolore
              debitis.
            </p>
          </article>

          <article>
            <h3>Ração</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              doloremque? Eum, fuga. Vel in sed ex vero id molestiae deserunt
              ea, minus incidunt itaque nostrum accusamus dolores commodi dolore
              debitis.
            </p>
          </article>

          <article>
            <h3>Coleira</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              doloremque? Eum, fuga. Vel in sed ex vero id molestiae deserunt
              ea, minus incidunt itaque nostrum accusamus dolores commodi dolore
              debitis.
            </p>
          </article>
        </Container>
      </StyledProdutos>
    </>
  );
}
