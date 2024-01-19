import Link from "next/link";

export default function Posts({ posts }) {
  return (
    <article>
      <Link href={`/post/${posts.id}`}>
        <h3>{posts.titulo}</h3>
        <p>{posts.subtitulo}</p>
      </Link>
    </article>
  );
}
