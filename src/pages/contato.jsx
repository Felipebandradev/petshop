import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const StyledContato = styled.section`
  h2::before {
    content: "💌 ";
  }

  form > div {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;

    & label {
      font-weight: bold;
      width: 30%;
      display: flex;
      align-items: center;
    }

    & input,
    & textarea {
      width: 70%;
      border: none;
      box-shadow: var(--sombra-box);
      padding: 0.5rem;
    }

    & button {
      background-color: var(--cor-primaria-fundo);
      color: var(--cor-primaria);
      padding: 1rem;
      border: none;
      cursor: pointer;
    }
  }
`;

export default function Contato() {
  const { register, handleSubmit } = useForm();

  const enviarContato = (dados) => {
    console.log("Enviando dados...",dados);
  };

  return (
    <>
      <Head>
        <title>Contato - Petshop 2024</title>
        <meta name="description" content="Fale conosco sobre o petshop.." />
      </Head>
      <StyledContato>
        <h2> Fale conosco </h2>

        <Container>
          <form
            action=""
            method="post"
            onSubmit={handleSubmit((dados) => {
              enviarContato(dados);
            })}
          >
            <div>
              <label htmlFor="nome">Nome:</label>
              <input
                {...register("nome")}
                type="text"
                name="nome"
                id="nome"
                required
              />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
                required
              />
            </div>

            <div>
              <label htmlFor="menssagem">
                Menssagem: <br />
              </label>
              <textarea
                {...register("menssagen")}
                name="menssagen"
                id="menssagem"
                maxLength={500}
                cols="30"
                rows="10"
                required
              ></textarea>
            </div>
            <div>
              <button type="submit">Enviar menssagem</button>
            </div>
          </form>
        </Container>
      </StyledContato>
    </>
  );
}
