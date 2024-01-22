import Link from "next/link";
import styled from "styled-components";

const StyledListasPosts = styled.div`
  article {
    background-color: #f7f7f7;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 250ms;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }

    & a {
      text-decoration: none;
      color: black;

      &:hover,
      &:focus {
        color: #7575d3;
      }
    }
  }

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    article {
      width: 49%;
    }
  }
`;

export default function ListaPosts({ array }) {
  return (
    <StyledListasPosts>
      {array.map(({id, titulo, subtitulo}) => {
        return (
          <article>
            <Link href={`/post/${id}`}>
              <h3>{titulo}</h3>
              <p>{subtitulo}</p>
            </Link>
          </article>
        );
      })}
    </StyledListasPosts>
  );
}
