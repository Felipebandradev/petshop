import Container from "@/components/ui/Container";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Styled404 = styled.section`
    text-align: center;

    h2::before{
        content: "😱 ";
    }

    img{
        max-width: 100%;
    }
`;

export default function Pagina404(){
    return <>
    <Head>
        <title>Ops - Petshop 2024</title>
    </Head>
    <Styled404>
        <h2>Au Au au! Foi Mal!! </h2>

        <Container>
            <h3>Ops algo deu Errado</h3>
            <Image src="/images/404.svg" width={500} height={296} alt="Ilustração de Cachorrinho bonitinho" />
        </Container>
    </Styled404>
    </>
}