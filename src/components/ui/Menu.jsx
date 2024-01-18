import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  /* Mobile First */
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    background-color: var(--cor-primaria-fundo);
    color: var(--cor-primaria);
    padding: 0.8rem 1rem;

    &:first-child {
      border-top-left-radius: var(--borda-arredondada);
      border-bottom-left-radius: var(--borda-arredondada);
    }
    &:last-child {
      border-top-right-radius: var(--borda-arredondada);
      border-bottom-right-radius: var(--borda-arredondada);
    }

    &:hover, &:focus{
      background-color: var(--cor-primaria-fundo-hover);
    }

  }
`;

export default function Menu() {
  return (
    <StyledNav>
      <Link href="/"> Blog </Link>
      <Link href="/produtos"> Produtos </Link>
      <Link href="/sobre"> Sobre </Link>
      <Link href="/contato"> Contato </Link>
    </StyledNav>
  );
}
