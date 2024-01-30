import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import serverApi from "./api/server";
import { useRouter } from "next/router";

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
  let router = useRouter();

  const enviarContato = async (dados) => {
    const { nome, email, mensagem } = dados;
    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      header: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    try {
      await fetch(`${serverApi}/contatos.json`, opcoes);
      alert("Dados enviados!");
      router.push("/");
    } catch (error) {
      console.error("Deu ruim no envi: " + error.message);
    }
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
                {...register("mensagem")}
                name="mensagem"
                id="mensagem"
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
