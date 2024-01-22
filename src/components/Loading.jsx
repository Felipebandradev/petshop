import Image from "next/image";

function Loading() {
  return (
    <p style={{ textAlign: "center" }}>
      <Image
        src="/images/pacman.svg"
        width={75}
        height={75}
        alt="carregando dados"
      />
    </p>
  );
}

export default Loading;
