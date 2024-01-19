import Head from "next/head";
import styled from "styled-components";

const StyledProdutos = styled.section`
  h2::before {
    content: "🎁 ";
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

        <article>
          <h3>Banho e Tosa</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            doloremque? Eum, fuga. Vel in sed ex vero id molestiae deserunt ea,
            minus incidunt itaque nostrum accusamus dolores commodi dolore
            debitis.
          </p>
        </article>

        <article>
          <h3>Ração</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            doloremque? Eum, fuga. Vel in sed ex vero id molestiae deserunt ea,
            minus incidunt itaque nostrum accusamus dolores commodi dolore
            debitis.
          </p>
        </article>

        <article>
          <h3>Coleira</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            doloremque? Eum, fuga. Vel in sed ex vero id molestiae deserunt ea,
            minus incidunt itaque nostrum accusamus dolores commodi dolore
            debitis.
          </p>
        </article>
      </StyledProdutos>
    </>
  );
}
