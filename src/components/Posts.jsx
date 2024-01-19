import Link from "next/link";

export default function Posts({ id, titulo, subtitulo }) {
  return (
    <article>
      <Link href={`/post/${id}`}>
        <h3>{titulo}</h3>
        <p>{subtitulo}</p>
      </Link>
    </article>
  );
}
