import styled from "styled-components";

const StyledCategorias = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: var(--borda-arredondada) 1rem;

  button {
    text-transform: capitalize;
    margin: var(--borda-arredondada);
    padding: 0.5rem;

    border-radius: var(--borda-arredondada);
    border: none;

    background-color: #a17dec;
    color: var(--cor-primaria);

    font-size: 0.9rem;

    &:hover,
    &:focus {
      background-color: #bb9df2;
    }

    &.ativo {
      background-color: #8248fd;
    }
  }

  .limpar {
    background-color: #5a38d9;

    &:hover {
      background-color: #6944e7;
    }

    &::before {
      content: "🧹 ";
    }
  }
`;

export default function ListaCategoria({categoria, catAtiva, limpaFiltro, filtro, filtroAtivo}) {
  return (
    <StyledCategorias>
      {categoria.map((categoria, indice) => {
        return (
          <button
            className={categoria === catAtiva ? "ativo" : ""}
            key={indice}
            onClick={filtro}
          >
            {categoria}
          </button>
        );
      })}
      {filtroAtivo && (
        <button onClick={limpaFiltro} className="limpar">
          Limpar Filtro
        </button>
      )}
    </StyledCategorias>
  );
}
