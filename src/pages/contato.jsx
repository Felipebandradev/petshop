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

    /* Seletor + significa "elemento adjacente" ou seja,
    pegar os paragrafos que estão depois da div */

    & + p {
      font-size: 0.88rem;
      color: #bb1f75;
    }

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
            autoComplete="off"
            action=""
            method="post"
            onSubmit={handleSubmit((dados) => {
              enviarContato(dados);
            })}
          >
            <div>
              <label htmlFor="nome">Nome:</label>
              <input
                {...register("nome", { required: true })}
                type="text"
                name="nome"
                id="nome"
              />
            </div>
            {/* o ? é conhecido por "Optional Chaining[encadeamento opcional]" É usado para evitar erros caso uma propriedade de um objeto seja null ou undefined. Caso não seja null/undefined aí seim verificamos se o type é required para seguir com a validação  */}
            {errors.nome?.type === "required" && (
              <p>você deve digitar o nome</p>
            )}

            <div>
              <label htmlFor="email">E-mail:</label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
              />
            </div>

            {errors.email?.type === "required" && (
              <p>você deve digitar o email</p>
            )}

            <div>
              <label htmlFor="menssagem">
                Menssagem: <br />
              </label>
              <textarea
                {...register("mensagem", { required: true, minLength: 20 })}
                name="mensagem"
                id="mensagem"
                maxLength={500}
                cols="30"
                rows="10"
              ></textarea>
            </div>

            {errors.mensagem?.type === "required" && (
              <p> você deve digitar uma menssagem</p>
            )}

            {errors.mensagem?.type === "minLength" && (
              <p>sua mesagem deve tar pelo menos 20 caracteres</p>
            )}

            <div>
              <button type="submit">Enviar menssagem</button>
            </div>
          </form>
        </Container>
      </StyledContato>
    </>
  );
}
